import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminTemplate from './AdminTemplate'
function Admin() {
    return (
        <>
        <div></div>
            <Outlet />
        </>
    )
}

export default Admin