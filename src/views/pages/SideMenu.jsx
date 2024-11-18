
import React from 'react';
import { PanelMenu } from 'primereact/panelmenu';

const SideMenu = ({ setActiveMenuItem,isSidebarCollapsed  }) => {
    const menuItems = [
        { label: 'Dashboard', icon: 'pi pi-home', url: 'dashboard' },
        { label: 'Users', icon: 'pi pi-users', url: 'user' },
        { label: 'Table', icon: 'pi pi-cog', url: 'table' },
    ];

    // Handle navigation by setting the active menu item
    const handleNavigation = (url) => {
        setActiveMenuItem(url);  // This updates the active menu item in the parent component
    };

    // Mapping menu items for the PanelMenu
    const mapMenuItems = (items) => {
        return items?.map((item) => ({
            label: item.label,
            icon: item.icon,
            command: () => handleNavigation(item.url),
            className: isSidebarCollapsed ? 'collapsed-menu-item' : '', // Trigger the state update when an item is clicked
        }));
    };

    return (
        <div className="panel-menu-container">
            <PanelMenu model={mapMenuItems(menuItems)} className="sidebar-menu" />
        </div>
    );
};

export default SideMenu;

// import React, {useState} from 'react';
// import { PanelMenu } from 'primereact/panelmenu';
// import { useNavigate } from 'react-router-dom';
// import { PanelMenuItem } from 'primereact/panelmenu';
// import  DashboardContent  from './Dashboard';
// import  Users  from './User';

// const SideMenu = () => {
//     const [activeIndex, setActiveIndex] = useState(0);
//     const [urlItems,setUrlItems]=useState()
//     const navigate = useNavigate();
//     // const menuItems = [
//     //     {
//     //         label: 'Home',
//     //         icon: 'pi pi-home',
//     //         items: [
//     //             { label: 'Dashboard', icon: 'pi pi-chart-bar' },
//     //             { label: 'Profile', icon: 'pi pi-user' }
//     //         ]
//     //     },
//     //     {
//     //         label: 'Settings',
//     //         icon: 'pi pi-cog',
//     //         items: [
//     //             { label: 'General', icon: 'pi pi-cogs' },
//     //             { label: 'Security', icon: 'pi pi-shield' }
//     //         ]
//     //     },
//     //     {
//     //         label: 'Help',
//     //         icon: 'pi pi-question-circle',
//     //         items: [
//     //             { label: 'FAQs', icon: 'pi pi-info-circle' },
//     //             { label: 'Support', icon: 'pi pi-phone' }
//     //         ]
//     //     }
//     // ];
//     const menuItems = [
//         {
//             label: 'Dashboard',
//             icon: 'pi pi-home',
//             // command: () => setActiveIndex(0),
//               // className: activeIndex == 0 ? 'active-menuitem' : ''
//             // style: { backgroundColor: activeIndex === 0 ? 'white' : 'transparent', color: activeIndex === 0 ? '#003a7f' : 'black' },
//             url:'/dashboard'
//         },
//         {
//             label: 'Users',
//             icon: 'pi pi-users',
//              url:'/user'
//             // command: () => setActiveIndex(1),
//               // className: activeIndex == 1 ? 'active-menuitem' : ''
//             // style: { backgroundColor: activeIndex === 1 ? 'white' : 'transparent',color: activeIndex === 1 ? '#003a7f' : 'black' },
//         },
//         {
//             label: 'Settings',
//             icon: 'pi pi-cog',
//              url:'/settings'
//             // command: () => setActiveIndex(2),
//               // className: activeIndex == 2 ? 'active-menuitem' : ''
//             // style: { backgroundColor: activeIndex === 2 ? 'white' : 'transparent',color: activeIndex === 2 ? '#003a7f' : 'black'}
//         },
//     ];
    
//     const handleNavigation = (url) => {
//         if (url) {
//             navigate(url); // Use navigate to go to the given URL
//         }
//         setUrlItems(url)
//     };

//     const mapMenuItems = (items) => {
//         return items?.map((item) => {
            
//             // If the item has a 'command' (which contains the route), create a navigation command
//             if (item.url) {
//                 return {
//                     label: item.label,
//                     icon: item.icon,
                   
//                     command: () => handleNavigation(item.url) // Use the 'command' for navigation
//                 };
//             }

//             // If the item has nested 'items', recursively map those items
//             if (item.items) {
//                 return {
//                     label: item.label,
//                     icon: item.icon,
//                     items: mapMenuItems(item.items) // Recursively process the nested items
//                 };
//             }

//             return null; // Return null for items without 'command' or 'items'
//         }).filter(item => item !== null); // Filter out null items
//     };

//     return (
//         <div className="panel-menu-container">
//             {/* <PanelMenu model={menuItems}   className="sidebar-menu"/> */}
//             <PanelMenu model={mapMenuItems(menuItems)}   className="sidebar-menu"    />

//             {/* <div className="main-content" style={{ marginLeft: '20px', padding: '20px', flex: 1 }}>
//                 {urlItems == '/dashboard' && <DashboardContent />}
//                 {urlItems == '/users' && <Users />}
              
              
//             </div> */}
//         </div>
//     );
// };

// export default SideMenu;
// //
