import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './_components/header'
import Footer from './_components/footer'
function Home() {
    return (
        <>
            <Header />
            <div style={{ minHeight: '100vh' }}> <Outlet /></div>
            <Footer />
        </>
    )
}

export default Home