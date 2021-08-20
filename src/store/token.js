import { createSlice } from "@reduxjs/toolkit";

export const tokenSlice = createSlice({
    name: "token",
    initialState: {
        accessTokenBearer: ""
    },
    reducers: {
        getToken: (state) => {
            const urlSearchParams = new URLSearchParams(window.location.hash.substring(1));
            const setAccessToken = urlSearchParams.get('access_token');
            const accessTokenBearer = `Bearer ${setAccessToken}`;
            state.accessTokenBearer = accessTokenBearer;
        }
    }
});

export const {getToken} = tokenSlice.actions;
export default tokenSlice.reducer;