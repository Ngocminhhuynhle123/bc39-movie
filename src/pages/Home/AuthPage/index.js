import React, { useState } from 'react'
import { fetAuth } from './duck/action';
import { useDispatch } from 'react-redux'
import { useNavigate,Navigate } from 'react-router-dom'
import './style.css'
export default function AuthPage() {
    
    const [state, setState] = useState({
        taiKhoan: "",
        matKhau: "",
    })
    const handelOnchange = (event) => {
        const { name, value } = event.target;
        setState({
            ...state,
            [name]: value,
        })
    }
    const navigate =useNavigate()
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(fetAuth(state,navigate))
    }
    if (localStorage.getItem("user")) {
        return <Navigate to={"/"}/>
    }
    return (
        <div className='logIN'>
            <div className='container'>
                <div>
                    <div className='col-md-6 mx-auto mt-5'>
                        <h3>Login</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Tài khoản</label>
                                <input type="text" name="taiKhoan" onChange={handelOnchange} className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Mật khẩu</label>
                                <input type="password" name="matKhau" onChange={handelOnchange} className="form-control" />
                            </div>
                            <button type="submit" className='btn btn-success'>
                                Đăng nhập
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

