import React, { useEffect, useMemo, useState } from 'react'
import './style.css'
import { FaUser } from 'react-icons/fa'
import { NavLink, Link } from 'react-router-dom'
function Header() {
 const [render, setRender] = useState(false)
    const handleLogIn = () => {
        if (!localStorage.getItem("user")) {
            return <NavLink className='btn btn-success btn-login' to={'/log-in'} >Đăng nhập</NavLink>
        }
        else {
            let user = JSON.parse(localStorage.getItem("user"))
            return <div className="dropdown">
                <Link className="btn btn-secondary dropdown-toggle btn-login" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                    <FaUser /> {user.taiKhoan}
                </Link>
                <div className="dropdown-menu">
                    <button className="dropdown-item btn btn-danger" onClick={() => {
                        window.localStorage.removeItem('user')
                        setRender(!render)
                    }}>Đăng xuất</button>
                </div>
            </div>
        }
    }
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink className="navbarBrand" to={""}>Cinema</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-link" to={''}>TRANG CHỦ <span className="sr-only">(current)</span></NavLink>
                        <NavLink className="nav-link" to={'/listmovie'}>PHIM ĐANG CHIẾU <span className="sr-only">(current)</span></NavLink>
                        {handleLogIn()}
                    </div>
                </div>
            </nav>


        </header>
    )
}

export default Header