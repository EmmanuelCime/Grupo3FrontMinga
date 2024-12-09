// import { createReducer } from "@reduxjs/toolkit";
// import { fetchFavorites } from "./favoritesAction";

// const initialState = {
//     favorites: [],
//     loading: false,
//     error: null,
// };

// const favoritesReducer = createReducer(initialState, (builder) => {
//     console.log("Cargando favoritesReducer");
//     builder
//         .addCase(fetchFavorites.pending, (state) => {
//             state.loading = true;
//             state.error = null;
//         })
//         .addCase(fetchFavorites.fulfilled, (state, action) => {
//             state.loading = false;
//             state.favorites = action.payload; 
//         })
//         .addCase(fetchFavorites.rejected, (state, action) => {
//             state.loading = false;
//             state.error = action.payload; 
//         });
// });

// export default favoritesReducer;
