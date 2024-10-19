import React from "react";
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
import { useAuth } from '../context/AuthContext';
import AddOperator from "../pages/AddOperator";
import OperatorList from "../components/OperatorList";

const Router = () => {
    const { user } = useAuth();
    const userRole = user ? user.role : null;
    return (
        <Routes>
            {userRole === "Manager" && (
                <>
                    <Route path="/" element={<Landing />} />
                    <Route path="/addoperator" element={<AddOperator />} />
                    <Route path="/" element={<LayoutManager />}>
                        <Route path="/tasks/pending" element={<PendingTasks />} />
                        <Route path="/tasks/completed" element={<CompletedTasks />} />
                        <Route path="/tasks/notStarted" element={<NotStartedTasks />} />
                        <Route path="/operators" element={<OperatorList />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/realtimemonitoring" element={<RealTimeMonitoring />} />
                        <Route path="/productiontraffic" element={<ProductionTraffic />} />
                        <Route path="/energytracking" element={<Energytracking/>} />
                    </Route>
                </>
            )}
            {userRole === "Operator" && (
                <>
                    <Route path="/" element={<Landing />} />
                    <Route path="/" element={<LayoutOperator />}>
                        <Route path="/tasks/pending" element={<PendingTasks />} />
                        <Route path="/tasks/completed" element={<CompletedTasks />} />
                        <Route path="/tasks/notStarted" element={<NotStartedTasks />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/realtimemonitoring" element={<RealTimeMonitoring />} />
                        <Route path="/productiontraffic" element={<ProductionTraffic />} />
                        <Route path="/energytracking" element={<Energytracking />} />
                    </Route>
                </>
            )}
            {!userRole && (
                <>
                    <Route path="/" element={<Welcome />} />
                    <Route path="/login" element={<Login />} />
                </>
            )}
            {/* Fallback route */}
            {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
    );
};

export default Router;
