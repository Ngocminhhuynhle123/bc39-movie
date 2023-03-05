import { combineReducers } from "redux";
import { BannerMovieReducer } from "pages/Home/HomeMovie/Carousel/duck/reducer";
import { ListMovieReducer } from "pages/Home/HomeMovie/listMovie/duck/reducer";
export const rootReducer = combineReducers({ BannerMovieReducer, ListMovieReducer});
