import { configureStore } from "@reduxjs/toolkit";
import { mangaReducer } from "./reducers/mangaReducer";
import { categoryReducer } from "./reducers/categoryReducer";
import authReducer from "./reducers/authReducer";
import { chapterReducer } from "./reducers/chapterReducer";
import commentsReducer from "./reducers/commentsReducer";

const store = configureStore({
    reducer: {
        authReducer,
        mangaReducer,
        categoryReducer,
        chapterReducer,
        comments: commentsReducer,
    }
})

export default store