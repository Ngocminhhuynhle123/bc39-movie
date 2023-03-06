import {combineReducers} from "redux";
import { BannerMovieReducer } from "pages/Home/HomeMovie/Carousel/duck/reducer";
import { ListMovieReducer } from "pages/Home/HomeMovie/listMovie/duck/reducer";
import { authLoginReducer } from "pages/Admin/AdminTemplate/AuthPage/duck/reducer";
import { detailMovieReducer } from "pages/Home/Detail/duck/reducer";
export const rootReducer = combineReducers({ BannerMovieReducer, ListMovieReducer, authLoginReducer,detailMovieReducer});
