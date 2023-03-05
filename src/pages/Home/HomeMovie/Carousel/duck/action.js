import { BannerMovieRequest, BannerMovieSuccess, BannerMovieFalse } from "./type";
import api from 'Utils/apiUtils'
export const fetData = () => {
    return (dispatch) => {
        dispatch(getBannerMovieRequest())
        api.get(`QuanLyPhim/LayDanhSachBanner`)
            .then((retult) => {
                dispatch(getBannerMovieSuccess(retult.data.content))
            })
            .catch((error) => {
                dispatch(getBannerMovieFalse(error))
            })
    }
};


export const getBannerMovieRequest = () => {
    return {
        type: BannerMovieRequest,
    }
};
export const getBannerMovieSuccess = (data) => {
    return {
        type: BannerMovieSuccess,
        payload: data,
    }
};
export const getBannerMovieFalse = (error) => {
    return {
        type: BannerMovieFalse,
        payload: error,
    }
};