import { createSlice } from "@reduxjs/toolkit";

const commentsSlice = createSlice({
    name: "comments",
    initialState: [],
    reducers: {
        addComment: (state, action) => {
            state.push(action.payload); // Agrega un nuevo comentario al array
        },
        // Opcional: Puedes agregar más acciones como editar o eliminar comentarios
    },
});

export const { addComment } = commentsSlice.actions;
export default commentsSlice.reducer;
