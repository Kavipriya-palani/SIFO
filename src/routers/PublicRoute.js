import React from "react";
import { Route, Routes } from "react-router-dom";

const PublicRoute = ({ element, path }) => {
  return ( <Routes>
    <Route path={path} element={element} />
  </Routes>
  )
};

export default PublicRoute;
// import React from "react";
// import { Outlet,Navigate } from "react-router-dom";

// const PublicRoute = () => {
//   return <Outlet />;
// };

// // const PublicRoute = () => {
// //   const authData = localStorage.getItem("authData"); // Example auth check
// //   // Redirect authenticated users to a protected route
// //   return authData ? <Navigate to="/dashboard" replace /> : <Outlet />;
// // };

// export default PublicRoute;


