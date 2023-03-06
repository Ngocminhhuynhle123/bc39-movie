import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { FetDataListMovie } from '../HomeMovie/listMovie/duck/action';
import { TiTicket } from 'react-icons/ti'
import './style.css'

function ListMovie() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(FetDataListMovie());
    }, [])
    const data = useSelector((state) => state.ListMovieReducer.data)

    const [currentTab, setCurrentTab] = useState('0');
    const [NowShowing, setNowShowing] = useState(true);
    const [ComingSoon, setComingSoon] = useState(false);
    const handleTabClickNowShowing = (e) => {
        setCurrentTab(e.target.name); 
        setNowShowing(true)
        setComingSoon(false);
    }
    const handleTabClickComingSoon = (e) => {
        setCurrentTab(e.target.name);
        setNowShowing(false)
        setComingSoon(true);
    }
    const HandelListMovie = () => {
        if (data) {
            let ListMovieComingSoon = data.filter(movie => movie.dangChieu !== true)
            let ListMovieNowShowing = data.filter((movie) => movie.dangChieu === true)
            const ListMovie = [ListMovieNowShowing, ListMovieComingSoon]
            return (
                ListMovie[currentTab].map((movie) => {      
                    return (
                        <li key={movie.maPhim} className="card_movie col-6 col-lg-3 mb-5">
                            <NavLink to={`detail/${movie.maPhim}`}>
                                <div className="frame_img">
                                    <img className="img_movie" src={movie.hinhAnh} alt={movie.biDanh} />
                                </div>
                                <h3 className="title_movie">{movie.tenPhim}</h3>
                                <button className="btn_buyStick" ><TiTicket size={20} /> mua ve</button>
                            </NavLink>
                        </li>
                    )
                })
                
            )
}
    }

return (
    <section id="menu_Movie">
        <div className='container-lg'>
            <div className='tabs'>
                <button disabled={NowShowing} className={NowShowing ? "title_tad active" : 'title_tad'} name='0' onClick={(handleTabClickNowShowing)}>Phim Đang Chiếu</button>
                <button disabled={ComingSoon} className={ComingSoon ? "title_tad active" : 'title_tad'} name='1' onClick={(handleTabClickComingSoon)}>Phim Sắp Chiếu</button>
            </div>
            <div className="tab-content">
                <div className='list_movie'>
                    <div className='main_card_movie'>
                        <ul className='row'>
                            {data && HandelListMovie()}
                        </ul>
                    </div>
                </div>
            </div>
        </div>


    </section>
);
}

export default ListMovie