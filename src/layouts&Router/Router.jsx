import React from "react"
import { Route, Routes } from "react-router-dom";
import Welcome from "../pages/general/Welcome";
import Login from "../pages/general/Login";
import LayoutOperator from "./LayoutOperator";
import Landing from "../pages/both/Landing";
// import { useAuth } from './AuthContext';

const Router = () => {
    const user = "operator";
    return(
        <Routes>
            {user?(
                user == "manager"? (
                    <>
                        {/* <Route path="/" element={<LayoutManager/>}>
                            <Route path="/" element={<UserHome/>} />
                            <Route path="/search" element={<Recherche/>} />
                            <Route path="/machines" element={<Machines/>} />
                            <Route path="/MonProfil" element={<MonProfil/>} />
                            <Route path="/ModfProfil" element={<ModfProfil />} />
                            <Route path="/details" element={<DetailMach/>} />
                            <Route path="/result" element={<ResultRech/>} />
                            <Route path="/machines/ajout" element={<AjoutMach/>} />
                            <Route path="/stats" element={<Stats/>} />
                            <Route path="/Aide" element={<Aide />} />
                            <Route path="/Contact" element={<Contact />} />
                            <Route path="*" element={<NotFound/>} />
                        </Route> */}
                    </>
                ) : user == "operator"?(
                <>
                    <Route path="/" element={<Landing/>}/>
                    <Route path="/another" element={<LayoutOperator />}>
                        {/* <Route path="/" element={<Home />} /> */}
                        {/* <Route path="*" element={<NotFound/>} /> */}
                    </Route>
                </>
                ):
                <Route path="*" element={<NotFound/>} />
            ) : (
                <>
                    <Route path="/" element={<Welcome />}/>
                    <Route path="/login" element={<Login/>}/>
                    {/* <Route path="*" element={<NotFound/>} /> */}
                </>
                )
            }
        </Routes>
    );
}

export default Router;