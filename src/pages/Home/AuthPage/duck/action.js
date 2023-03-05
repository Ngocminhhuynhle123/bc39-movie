import { auth_Movie_Repest, auth_Movie_Success, auth_Movie_fail } from "./types";
import api from "Utils/apiUtils";
export const fetAuth = (user, navigate) => {
    return (dispatch) => {
        dispatch(actAuth_Movie_Repest())
        api.post("QuanLyNguoiDung/DangNhap", user)
            .then((retult) => {
                dispatch(actAuth_Movie_Success(retult.data.content));
                localStorage.setItem("user", JSON.stringify(retult.data.content))
                navigate("", { replace: true });

            })
            .catch((error) => {
                dispatch(actAuth_Movie_fail(error))
            })
    }
}

export const actAuth_Movie_Repest = () => {
    return {
        type: auth_Movie_Repest,
    }
}
export const actAuth_Movie_Success = (data) => {
    return {
        type: auth_Movie_Success,
        payload: data
    }
}
export const actAuth_Movie_fail = (error) => {
    return {
        type: auth_Movie_fail,
        payload: error
    }
}
