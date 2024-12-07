import { configureStore } from "@reduxjs/toolkit";
import { mangaReducer } from "./reducers/mangaReducer";
import { categoryReducer } from "./reducers/categoryReducer";
import authReducer from "./reducers/authReducer";
import { chapterReducer } from "./reducers/chapterReducer";
import commentsReducer from "./reducers/commentsReducer";
import { userReducer } from "./reducers/userReducer";


const store = configureStore({
    reducer: {
        authReducer,
        mangaReducer,
        categoryReducer,
        chapterReducer,
        comments: commentsReducer,
        userReducer,
    }
})

export default store