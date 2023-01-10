import React from 'react';
import { NavLink } from 'react-router-dom';

const DashboardSidebar = ({children}) => {
    return (
        <div className="drawer drawer-mobile mt-16 bg-accent">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* <!-- Page content here --> */}
          {children}
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">

            <li>
                <NavLink to="/dashboard/add-services">Add Services</NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/add-admin">Add Admin</NavLink>
            </li>
          </ul>
        
        </div>
      </div>
    );
};

export default DashboardSidebar;