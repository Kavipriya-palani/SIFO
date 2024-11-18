import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "../views/common/Header";

const PrivateRoute = (props) => {
  const { component: Component, path, ...rest } = props;
  const shouldRender = props.computedMatch.path === path;
  let authData = localStorage.getItem()
  authData = JSON.parse(authData)
  if (authData === null || Object.keys(authData)?.length === 0) {
    const queryParameters = new URLSearchParams(window.location.search)
    // console.log("added2323", queryParameters);
    // const type = queryParameters.get("type")
    // const docId = queryParameters.get("docId")
    // const email = queryParameters.get("emid")
    // var object = { "type": type, "docId": docId, "email": email}
    // console.log("object1234", object);
    // localStorage.setItem("RedirectLogout", JSON.stringify(object))
    return <Navigate to={"/"} />
  }
  if (!shouldRender) return null;
  // const headerRestrictRoutes = ['/store-preview', '/affiliate-dashboard', '/store-online']

  return (
    <Routes>
      {/* {headerRestrictRoutes.includes(window.location.pathname) ? <div className="Test d-none d-md-block"><Header /></div> : <Header />} */}
      <Header />
      <Route {...rest} component={Component} />
      </Routes>
  );
};

export default PrivateRoute;

// import React from "react";
// import { Navigate, Outlet } from "react-router-dom";
// import Header from "../views/common/Header";

// const PrivateRoute = ({ path }) => {
//   let authData = JSON.parse(localStorage.getItem("authData") || "{}");

//   // Redirect to login if not authenticated
//   console.log("authData",authData);
  
//   if (!authData || Object.keys(authData).length === 0) {
//     return <Navigate to="/" />;
//   }

//   // Render authenticated routes
//   return (
//     <>
//       <Header />
//       <Outlet />
//     </>
//   );
// };

// export default PrivateRoute;
