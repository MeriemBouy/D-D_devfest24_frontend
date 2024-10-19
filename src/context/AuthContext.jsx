import { createContext, useState, useEffect, useContext } from 'react'
import {jwtDecode} from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { Cookies } from "react-cookie";

const cookies = new Cookies();

const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({children}) => {

    let [user, setUser] = useState(() => (localStorage.getItem('authTokens') ? jwtDecode(localStorage.getItem('authTokens')) : null))
    let [authTokens, setAuthTokens] = useState(() => (localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null))
    let [loading, setLoading] = useState(true)

    const navigate = useNavigate()

    let loginUser = async (e) => {
        console.log(e);
        e.preventDefault()
        const response = await fetch('http://127.0.0.1:8000/user/login/',{
            method: 'POST',
            headers: {
                "X-CSRFToken": cookies.get("csrftoken"),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username: e.target[0].value, password: e.target[1].value })
        });

        let data = await response.json();
        // With wrong credentials the code get stuck with parsing error message
        // because the response has text message not the access and request tocken in required format
        // performing a check on success of login will prevent this error.
        // a robust error handling can be implemented but below modification a work around to carry on with the tutorial
        if(data && response.ok){
            localStorage.setItem('authTokens', JSON.stringify(data));
            setAuthTokens(data)
            setUser(jwtDecode(data.access))
            navigate('/')
        } else {
            alert('Check login credentials :Something went wrong while logging in the user!')
        }
    }

    let logoutUser = () => {
        localStorage.removeItem('authTokens')
        setAuthTokens(null)
        setUser(null)
        navigate('/')
    }

    const updateToken = async () => {
        const response = await fetch('http://127.0.0.1:8000/user/token/refresh/', {
            method: 'POST',
            headers: {
                "X-CSRFToken": cookies.get("csrftoken"),
                'Content-Type':'application/json'
            },
            body:JSON.stringify({refresh:authTokens?.refresh})
        })
       
        const data = await response.json()
        if (response.status === 200) {
            setAuthTokens(data)
            setUser(jwtDecode(data.access))
            localStorage.setItem('authTokens',JSON.stringify(data))
        } else {
            logoutUser()
        }

        if(loading){
            setLoading(false)
        }
    }

    let contextData = {
        user:user,
        authTokens:authTokens,
        loginUser:loginUser,
        logoutUser:logoutUser,
    }

    useEffect(()=>{
        if(loading){
            updateToken()
        }

        const REFRESH_INTERVAL = 1000 * 60 * 4 // 4 minutes
        let interval = setInterval(()=>{
            if(authTokens){
                updateToken()
            }
        }, REFRESH_INTERVAL)
        return () => clearInterval(interval)

    },[authTokens, loading])

    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = () => {
    return useContext(AuthContext);
};