// import { createReducer } from "@reduxjs/toolkit";
// import {
//   fetchReactions,
//   createReaction,
//   deleteReactionByAuthor,
//   deleteReactionByCompany,
//   fetchReactionsByAuthor,
//   fetchReactionsByCompany,
//   fetchReactionsByAuthorAndReaction,
//   fetchReactionsByCompanyAndReaction,
// } from "../actions/reactionAction";

// const initialState = {
//   reactions: [],
//   loading: false,
//   error: null,
// };

// const reactionReducer = createReducer(initialState, (builder) => {
//   builder
//     // Fetch reactions
//     .addCase(fetchReactions.pending, (state) => {
//       state.loading = true;
//       state.error = null;
//     })
//     .addCase(fetchReactions.fulfilled, (state, action) => {
//       state.loading = false;
//       state.reactions = action.payload;
//     })
//     .addCase(fetchReactions.rejected, (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     })

//     // Create reaction
//     .addCase(createReaction.fulfilled, (state, action) => {
//       state.reactions.push(action.payload);
//     })

//     // Delete reaction by author
//     .addCase(deleteReactionByAuthor.fulfilled, (state, action) => {
//       state.reactions = state.reactions.filter(
//         (reaction) => reaction.authorId !== action.payload
//       );
//     })

//     // Delete reaction by company
//     .addCase(deleteReactionByCompany.fulfilled, (state, action) => {
//       state.reactions = state.reactions.filter(
//         (reaction) => reaction.companyId !== action.payload
//       );
//     })


// });

// export default reactionReducer;
