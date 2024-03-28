import { createSlice } from "@reduxjs/toolkit";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("authState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("authState", serializedState);
  } catch (err) {
    // Ignore write errors
  }
};

const authSlice = createSlice({
  name: "auth",
  initialState: loadState() || {
    isLoading: false,
    isError: false,
    isLogin: false,
    userRole: "",
  },
  reducers: {
    setPending: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    setFulfilled: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isLogin = true;
    },
    setRejected: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
    resetState: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isLogin = false;
    },
  },
});

export const { setPending, setFulfilled, setRejected, resetState } =
  authSlice.actions;
export const selectAuth = (state) => state.auth;

export default (state, action) => {
  const newState = authSlice.reducer(state, action);
  saveState(newState);
  return newState;
};
