import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import * as view from '../views';

const AppRouter = () => {
    console.log("route")
    return (
        <Router basename="/">
                <PublicRoute path={'/'} element={<view.Login />} />
                <PublicRoute path="/forgotpassword" element={<view.ForgotPassword />} />
                <PublicRoute path="/changepassword" element={<view.ChangePassword />} />
                <PublicRoute path="/resetpassword" element={<view.ResetPassword />} />
                <PublicRoute path="/dashboard" element={<view.Dashboard/>} />
                <PublicRoute path="/dashboardContent" element={<view.DashboardContent/>} />
                <PublicRoute path="/user" element={<view.User/>} />
        </Router>
    );
};

export default AppRouter;