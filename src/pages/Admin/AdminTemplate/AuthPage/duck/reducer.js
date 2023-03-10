import * as ActionType from "./types";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

export const authLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.AUTH_REQEST: {
      state.loading = true;
      state.data = null;
      state.error = null;

      return { ...state };
    }

    case ActionType.AUTH_SUCCESS: {
      state.loading = false;
      state.data = action.payload;
      state.error = null;

      return { ...state };
    }

    case ActionType.AUTH_FAIL: {
      state.loading = false;
      state.data = null;
      state.error = action.payload;

      return { ...state };
    }

    default:
      return { ...state };
  }
};

