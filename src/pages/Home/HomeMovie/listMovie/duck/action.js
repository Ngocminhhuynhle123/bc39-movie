import { ListMovieRequert, ListMovieSuccess, ListMovieFalse } from "./types";
import api from "Utils/apiUtils";
export const FetDataListMovie = () => {
    return (dispatch) => {
        dispatch(actListMovieRequert())
        api.get(`QuanLyPhim/LayDanhSachPhim?maNhom=GP11`)
        .then((retult)=>{
            dispatch(actListMovieSuccess(retult.data.content))
        })
        .catch((error)=>{
            dispatch(actListMovieFalse(error))
        })
    }
}

const actListMovieRequert = () => {
    return {
        type: ListMovieRequert
    }
}
const actListMovieSuccess = (data) => {
    return {
        type: ListMovieSuccess,
        payload: data
    }
}
const actListMovieFalse = (error) => {
    return {
        type: ListMovieFalse,
        payload: error
    }
}