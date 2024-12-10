import { configureStore } from "@reduxjs/toolkit";
import { mangaReducer } from "./reducers/mangaReducer";
import { categoryReducer } from "./reducers/categoryReducer";
import authReducer from "./reducers/authReducer";
import { chapterReducer } from "./reducers/chapterReducer";
import commentsReducer from "./reducers/commentsReducer";
import { userReducer } from "./reducers/userReducer";
import { authorReducer } from "./reducers/authorReducer";
import { panelAdminReducer } from "./reducers/adminPanelReducer";
// import reactionReducer from "./reducers/reactionReducer";
// import favoritesReducer from "./reducers/favoritesReducer";

const store = configureStore({
    reducer: {
        authReducer,
        mangaReducer,
        categoryReducer,
        chapterReducer,
        comments: commentsReducer,
        reaction: reactionReducer,
        // favorites: favoritesReducer,
        userReducer,
        authorReducer,
        panelAdminReducer: panelAdminReducer
    }
})

export default store