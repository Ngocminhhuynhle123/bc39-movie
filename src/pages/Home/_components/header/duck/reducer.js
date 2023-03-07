import { logINSuccess, logINFaile } from "./types";
const initialState = {
    logIn: false,
}
export const checklogInReducer = (state = initialState, action) => {
    switch (action.type) {
        case logINSuccess: {
            state.logIn = true;
            return { ...state }
        }
        case logINFaile: {
            state.logIn = false;
            return { ...state }
        }



        default: return { ...state }

    }
}