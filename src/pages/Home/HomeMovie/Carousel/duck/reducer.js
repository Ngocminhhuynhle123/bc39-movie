import { BannerMovieRequest, BannerMovieSuccess, BannerMovieFalse } from "./type";
const initalStale = {
    loading: false,
    data: null,
    error: null
}
export const BannerMovieReducer = (state = initalStale, action) => {
    switch (action.type) {
        case BannerMovieRequest: {
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state }
        }
        case BannerMovieSuccess: {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state }
        }
        case BannerMovieFalse: {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state }
        }



        default: { return { ...state } }

    }
}