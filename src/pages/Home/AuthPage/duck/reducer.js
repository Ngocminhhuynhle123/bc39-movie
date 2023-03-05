import { auth_Movie_Repest, auth_Movie_Success, auth_Movie_fail } from "./types";

const initialState = {
    loading: false,
    data: null,
    error: null,
}
const authLoginMovieReducer = (state = initialState, action) => {
    switch (action.type) {
        case auth_Movie_Repest: {
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state };
        }
        case auth_Movie_Success: {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state };
        }
        case auth_Movie_fail: {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state };
        }
        default:
            return { ...state };
    }
}
export default authLoginMovieReducer;