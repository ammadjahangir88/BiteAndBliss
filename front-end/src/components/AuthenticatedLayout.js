import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../components/SideBar';

const AuthenticatedLayout = () => {
  return (
    <div className='flex'>
      <SideBar />
      <div className="main-content">
        <Outlet />
        {/* Other components/routes for logged-in users */}
      </div>
    </div>
  );
}

export default AuthenticatedLayout;
