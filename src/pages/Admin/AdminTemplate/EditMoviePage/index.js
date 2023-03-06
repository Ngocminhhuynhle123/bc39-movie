import React, { Fragment, useEffect } from 'react'
import { Table } from 'antd'
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import { NavLink } from 'react-router-dom';
import { FetDataListMovie } from 'pages/Home/HomeMovie/listMovie/duck/action';
import { useDispatch, useSelector } from 'react-redux';
import './style.css'
export default function EditMoviePage() {
  const { Search } = Input;

  const onSearch = (value) => console.log(value);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(FetDataListMovie())
  }, [])

  const data = useSelector((state) => state.ListMovieReducer.data)

  console.log(data);
  const handledata = () => {
    return data?.map((item) => {
     return <tr role="row" key={item.maPhim}>
        <td>{item.tenPhim}</td>
        <td>
          <img className='img' src={item.hinhAnh} alt={item.biDanh} />
        </td>
        <td>{item.moTa}</td>
        <td>{item.ngayKhoiChieu}</td>
        <td>
          <button type="button" className="btn btn-warning">Sửa</button>
          <button type="button" className="btn btn-danger">Xóa</button>
        </td>
      </tr>
    })
  }
  return (
    <div className='container'>
      <h3 className='text-4xl'>Quản Lý Phim</h3>
      <NavLink className='btn btn-success mr-4' to={'add-movie'}>Them Phim</NavLink>
      <NavLink className='btn btn-primary mr-4' to={'login'}>Đăng nhập</NavLink>
      <NavLink className='btn btn-info mr-4' to={'add-user'}>Them nguoi dung</NavLink>
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Tim Kiem"
        size="large"
        onSearch={onSearch}
      />
      <table className="table table-bordered" aria-label="TABLE">
        <thead role="rowgroup">
          <tr role="row">
            <th role="columnheader" scope="col" tabIndex={0}>Tên Phim</th>
            <th role="columnheader" scope="col" tabIndex={0}>Hình ảnh</th>
            <th role="columnheader" scope="col" tabIndex={0}>Mô tả</th>
            <th role="columnheader" scope="col" tabIndex={0}>Ngày Chiếu</th>
            <th role="columnheader" scope="col" tabIndex={0}>Chỉnh Sửa</th>
          </tr>
        </thead>
        <tbody role="rowgroup">
          {handledata()}
        </tbody>
      </table>
    </div>

  )
}
