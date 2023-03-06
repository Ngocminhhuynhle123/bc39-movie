import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchDetailMovie } from "./duck/action";
import { useSelector, useDispatch } from "react-redux";
import './style.css'
import { NavLink } from "react-router-dom";
export default function DetailMoviePage() {
  const data = useSelector((state) => state.detailMovieReducer.data);
  const dispatch = useDispatch();

  const params = useParams();

  useEffect(() => {
    dispatch(fetchDetailMovie(params.id));
  }, []);

  const handleDetail = () => {
    return data && <div className="movie_card" id="bright">
      <div className="info_section">
        <div className="movie_header">
          <img className="locandina" src={data.hinhAnh} alt={data.biDanh} />
          <h1>{data.tenPhim}</h1>
          <h4>{data.ngayKhoiChieu}</h4>
        </div>
        <div className="movie_desc">
          <p className="text">
            {data.moTa}
          </p>
          <button className="btn btn-success">
            <NavLink className='textStick' to={`/buystick/${params.id}`} >Mua Vé</NavLink>
          </button>
          <iframe className="ifYo" src={data.trailer} allowfullscreen></iframe>
        </div>
      </div>

    </div>

  }
  return (
    <div>
      {handleDetail()}
    </div>
  );
}
