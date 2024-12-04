import { configureStore } from "@reduxjs/toolkit";
import { mangaReducer } from "./reducers/mangaReducer";
import { categoryReducer } from "./reducers/categoryReducer";

const store = configureStore({
    reducer: {
        mangaReducer,
        categoryReducer,
    }
})

export default store