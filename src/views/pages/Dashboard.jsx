import React, { useState } from "react";
import { Menubar } from "primereact/menubar";
import { PanelMenu } from "primereact/panelmenu";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import SideMenu from "./SideMenu";
import fbIcon from "../../assests/images/facebook-light.svg";
import DashboardContent from "./DashboardContent";
import Dashboard from "./Dashboard";
import User from "./User";
import Table from "./Table";
import leftArrow from "../../assests/images/left-arrow.svg";
import rightArrow from "../../assests/images/right-arrow.svg";
const FormLayoutDemo = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  const [urlItems, setUrlItems] = useState("/dashboard");

  const items = [
    {
      label: "Dashboard",
      icon: "pi pi-home",
      command: () => setActiveIndex(0),
      // className: activeIndex == 0 ? 'active-menuitem' : ''
      style: {
        backgroundColor: activeIndex === 0 ? "white" : "transparent",
        color: activeIndex === 0 ? "#003a7f" : "black",
      },
    },
    {
      label: "Users",
      icon: "pi pi-users",
      command: () => setActiveIndex(1),
      // className: activeIndex == 1 ? 'active-menuitem' : ''
      style: {
        backgroundColor: activeIndex === 1 ? "white" : "transparent",
        color: activeIndex === 1 ? "#003a7f" : "black",
      },
    },
    {
      label: "Table",
      icon: "pi pi-cog",
      command: () => setActiveIndex(2),
      // className: activeIndex == 2 ? 'active-menuitem' : ''
      style: {
        backgroundColor: activeIndex === 2 ? "white" : "transparent",
        color: activeIndex === 2 ? "#003a7f" : "black",
      },
    },
  ];

  const start = <img alt="logo" src={fbIcon} height="40" className="p-mr-2" />;

  const end = (
    <div
      className="p-d-flex p-ai-center"
      onClick={() => setDropdownVisible(!dropdownVisible)}
    >
      <img
        alt="profile"
        src={fbIcon}
        height="30"
        className="p-ml-2"
        style={{ borderRadius: "50%", cursor: "pointer" }}
      />
      <span className="pi pi-angle-down p-ml-2"></span>
    </div>
  );
  const dropDownFn = () => {
    setDropdownVisible(false);
  };
  const menuItems = [
    {
      label: "Dashboard",
      icon: "pi pi-home",
      // command: () => setActiveIndex(0),
      // className: activeIndex == 0 ? 'active-menuitem' : ''
      // style: { backgroundColor: activeIndex === 0 ? 'white' : 'transparent', color: activeIndex === 0 ? '#003a7f' : 'black' },
      url: "/dashboard",
    },
    {
      label: "Users",
      icon: "pi pi-users",
      url: "/user",
      // command: () => setActiveIndex(1),
      // className: activeIndex == 1 ? 'active-menuitem' : ''
      // style: { backgroundColor: activeIndex === 1 ? 'white' : 'transparent',color: activeIndex === 1 ? '#003a7f' : 'black' },
    },
    {
      label: "Table",
      icon: "pi pi-table",
      url: "/table",
      // command: () => setActiveIndex(2),
      // className: activeIndex == 2 ? 'active-menuitem' : ''
      // style: { backgroundColor: activeIndex === 2 ? 'white' : 'transparent',color: activeIndex === 2 ? '#003a7f' : 'black'}
    },
  ];
  const [activeMenuItem, setActiveMenuItem] = useState("dashboard");
  const routePage = () => {
    console.log("activeMenuItem", activeMenuItem);
    switch (activeMenuItem) {
      case "dashboard":
        return <DashboardContent />;
      case "user":
        return <User />;
      case "table":
        return <Table />;

      default:
        return <DashboardContent />;
    }
  };
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  //
  return (
    <>
      <div className="app">
        {/* Header */}
        <Menubar model={[]} start={start} end={end} className="header" />
        {dropdownVisible && (
          <div
            className="p-dropdown p-component"
            style={{ position: "absolute", top: "50px", right: "10px" }}
          >
            <ul className="p-dropdown-list">
              <li className="p-dropdown-item">
                <i class="pi pi-user"> </i>
                <span class="ms-2">Profile</span>
              </li>
              <li className="p-dropdown-item">
                <i class="pi pi-cog"> </i>
                <span class="ms-2">Table</span>
              </li>
              <li className="p-dropdown-item">
                <i class="pi pi-sign-out"></i>
                <span class="ms-2">Logout</span>
              </li>
            </ul>
          </div>
        )}
        {/* Sidebar and Content 
             <div className="layout">
                <div className="sidebar">
                      <SideMenu setActiveMenuItem={setActiveMenuItem} />
                      {console.log(activeMenuItem)}
                </div> */}

        {/* <div className={`sidebar ${isSidebarCollapsed ? 'collapsed' : ''}`}> */}
        <div className={`layout`}>
          <div className={`sidebar ${isSidebarCollapsed ? "collapsed" : ""}`}>
            <div
              className="sidebar-toggle-btn icon"
              onClick={toggleSidebar}
              aria-label="Toggle Sidebar"
            >
              <img
                src={isSidebarCollapsed ? rightArrow : leftArrow}
                alt="Toggle Sidebar"
                className="sidebar-toggle-img"
              />
            </div>
            <SideMenu
              setActiveMenuItem={setActiveMenuItem}
              isSidebarCollapsed={isSidebarCollapsed}
            />
          </div>
          <div
            className={`content ${
              isSidebarCollapsed ? "collapsed" : "expanded"
            }`}
          >
            {routePage()}
          </div>
        </div>
        {/* <div className="content"> */}
        {/* <h2>{activeIndex === 0 ? 'Dashboard' : 'Users'}</h2>
                    <p>Main content goes here...</p> */}

        {/* <div className="main-content" style={{ marginLeft: '20px', padding: '20px', flex: 1 }}>
                {menuItems?.map((obj)=>{
                    return(
                        <>
                           { obj.url=='/dashboard' && <DashboardContent />}
                           {obj.url == '/users' && <Users />}
                        </>
                    )
                })}
            </div> */}
        {/* {activeMenuItem === 'dashboard' && <DashboardContent />}
                        {activeMenuItem === 'user' && <User />}
                       
                </div> */}
      </div>
    </>
  );
};
//
export default FormLayoutDemo;
