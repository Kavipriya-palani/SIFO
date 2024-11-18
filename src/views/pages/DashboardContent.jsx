import React, { useState } from 'react';
import { Menubar } from 'primereact/menubar';
import { PanelMenu } from 'primereact/panelmenu';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import SideMenu from './SideMenu'
import fbIcon from '../../assests/images/facebook-light.svg'
const DashBoardContent = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [dropdownVisible, setDropdownVisible] = useState(false);


//
    return (
        <div className="app">
         <p>dashboard Data</p>
        </div>
    );
}

export default DashBoardContent;
