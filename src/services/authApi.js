import axios from "axios";
// import { Cookies } from "react-cookie";

const api = 'http://127.0.0.1:8000/user'

// const cookies = new Cookies();

const login = async (data) => {
    try {
        const response = await axios.post(`${api}/login`, data );
        return response.data
    } catch (error) {
        return error.response ? error.response.data : { error: 'An error occurred' };
    }
}

export {login};

