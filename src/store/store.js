import { configureStore } from "@reduxjs/toolkit";
import { mangaReducer } from "./reducers/mangaReducer";
import { categoryReducer } from "./reducers/categoryReducer";
import authReducer from "./reducers/authReducer";

const store = configureStore({
    reducer: {
        authReducer,
        mangaReducer,
        categoryReducer,
    }
})

export default store