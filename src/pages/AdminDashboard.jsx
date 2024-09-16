import React from 'react';
import Sidebar from '../components/Sidebar';

const AdminHeader = () => {
    return (
        <>
            <Sidebar />
            <h2 className='pt-20'>Admin Dashboard</h2>
        </>
    );
};

export default AdminHeader;
