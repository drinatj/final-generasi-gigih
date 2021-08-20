import { configureStore } from "@reduxjs/toolkit";
import { searchReducer } from "./searchReducer"

export default configureStore({
    reducer: {
        searchState: searchReducer,
    },
});