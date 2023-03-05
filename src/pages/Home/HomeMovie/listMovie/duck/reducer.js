import { ListMovieRequert, ListMovieSuccess, ListMovieFalse } from "./types";
const intialState = {
    loading: false,
    data: null,
    error: null,
}

export const ListMovieReducer = (state = intialState, action) => {
    switch (action.type) {
        case ListMovieRequert: {
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state }
        }
        case ListMovieSuccess: {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state }
        }
        case ListMovieFalse: {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state }
        }
        default: return { ...state }

    }
}