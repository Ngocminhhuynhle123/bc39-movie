import { useEffect, memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetData } from './duck/action'
import { NavLink } from 'react-router-dom'
import Slider from "react-slick";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import Loading from '_components/loading';
import './style.css'
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    ><FaChevronRight style={{ ...style, fontSize: "30px" }} /></div>
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    ><FaChevronLeft style={{ ...style, fontSize: "30px" }} /></div>
  );
}

function Carosel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: 'slick-carousel',
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />

  };
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetData())

  }, [])
  const loading = useSelector(state => state.BannerMovieReducer.loading);
  const data = useSelector(state => state.BannerMovieReducer.data);
  const HandelBaner = () => {
    if (data) {
      return data.map((item) => {
        return (<div key={item.maPhim}>
          <NavLink to={`/detail/${item.maPhim}`}>
            <img className="img_carousel" src={item.hinhAnh} alt="" />
          </NavLink>
        </div>)
      })
    }
  }
  if (loading) return <Loading />
  return (
    <section id="carousel">
      <Slider {...settings}>
        {HandelBaner()}
      </Slider>
    </section >

  )
}

export default memo(Carosel) 