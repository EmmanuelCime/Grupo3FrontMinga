import { configureStore } from "@reduxjs/toolkit";
import { mangaReducer } from "./reducers/mangaReducer";
import { categoryReducer } from "./reducers/categoryReducer";
import authReducer from "./reducers/authReducer";
import commentsReducer from "./reducers/commentsReducer";

const store = configureStore({
    reducer: {
        authReducer,
        mangaReducer,
        categoryReducer,
        comments: commentsReducer,
    }
})

export default store