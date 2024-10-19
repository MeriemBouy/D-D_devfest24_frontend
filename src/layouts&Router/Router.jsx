import React from "react"
import { Route, Routes } from "react-router-dom";
import Welcome from "../pages/general/Welcome";
import Login from "../pages/general/Login";
import LayoutOperator from "./LayoutOperator";
import LayoutManager from "./LayoutManager";
import Landing from "../pages/both/Landing";
import PendingTasks from "../pages/both/PendingTasks";
import CompletedTasks from "../pages/both/CompletedTasks";
import NotStartedTasks from "../pages/both/NotStartedTasks";
import Dashboard from "../pages/dashboardoperator/overview";
import RealTimeMonitoring from "../pages/dashboardoperator/RealTimeMonitoring";
import ProductionTraffic from "../pages/dashboardoperator/ProductionTraffic";
import Energytracking from "../pages/dashboardoperator/Energytracking";
import AddOperator from "../pages/Manager/AddOperator";
import LayoutManager from "./LayoutManager";
// import { useAuth } from './AuthContext';
import AddOperator from "../pages/AddOperator"; 
import OperatorList from "../components/OperatorList";

const Router = () => {
    const user = "manager";
    return(
        <Routes>
            {user?(
                user == "manager"? (
                    <>
                        <Route path="/addoperator" element={<AddOperator/>}/>
                        <Route path="/" element={<LayoutManager />}>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/realtimemonitoring" element={<RealTimeMonitoring />} />
                        <Route path="/productiontraffic" element={<ProductionTraffic />} />
                        <Route path="/energytracking" element={<Energytracking/>} />
                        {/* <Route path="/" element={<Home />} /> */}
                        {/* <Route path="*" element={<NotFound/>} /> */}
                    </Route>
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
                        <Route path="/landing" element={<Landing/>}/>
                        <Route path="/add-operator" element={<AddOperator/>} />
                        <Route path="/" element={<LayoutManager />}>
                           <Route path="/operators" element={<OperatorList/>}/>
                            {/* Other routes for manager */}
                        </Route>
                    </>
                ) : user == "operator"?(
                <>
                    <Route path="/landing" element={<Landing/>}/>
                    <Route path="/" element={<LayoutOperator />}>
                        <Route path="/tasks/pending" element={<PendingTasks />} />
                        <Route path="/tasks/completed" element={<CompletedTasks />} />
                        <Route path="/tasks/notStarted" element={<NotStartedTasks />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/realtimemonitoring" element={<RealTimeMonitoring />} />
                        <Route path="/productiontraffic" element={<ProductionTraffic />} />
                        <Route path="/energytracking" element={<Energytracking/>} />
                       
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