import { configureStore } from "@reduxjs/toolkit";
import { mangaReducer } from "./reducers/mangaReducer";
import { categoryReducer } from "./reducers/categoryReducer";
import authReducer from "./reducers/authReducer";
import commentsReducer from "./reducers/commentsReducer";
import { chapterReducer } from "./reducers/chapterReducer";

const store = configureStore({
    reducer: {
        authReducer,
        mangaReducer,
        categoryReducer,
        comments: commentsReducer,
        chapterReducer,
    }
})

export default store