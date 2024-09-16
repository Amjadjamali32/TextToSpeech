import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = ({ role, allowedRole }) => {
    if (!role) {
        return <Navigate to="/login" />;
    }

    if (role !== allowedRole) {
        return <Navigate to="/" />;
    }

    return <Outlet />;
};

export default ProtectedRoutes;
