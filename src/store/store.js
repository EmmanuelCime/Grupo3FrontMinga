import { configureStore } from "@reduxjs/toolkit";
import { mangaReducer } from "./reducers/mangaReducer";
import { categoryReducer } from "./reducers/categoryReducer";
import authReducer from "./reducers/authReducer";
import { chapterReducer } from "./reducers/chapterReducer";
import commentsReducer from "./reducers/commentsReducer";
import { userReducer } from "./reducers/userReducer";
import { authorReducer } from "./reducers/authorReducer";
// import reactionReducer from "./reducers/reactionReducer";


const store = configureStore({
    reducer: {
        authReducer,
        mangaReducer,
        categoryReducer,
        chapterReducer,
        comments: commentsReducer,
        // reaction: reactionReducer,
        userReducer,
        authorReducer,
    }
})

export default store