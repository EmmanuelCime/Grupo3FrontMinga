import { createReducer } from "@reduxjs/toolkit"
import { allAuthorAction, allCompanyAction, UpdateAuthorActive, UpdateCompanyActive } from "../actions/adminPanelAction"

const initialState = {
    allCompany: [],
    loadingCompany: false,
    errorcompany: null,
    allAuthor: [],
    loadingAuthor: false,
    errorAuthor: null,
}

export const panelAdminReducer = createReducer(initialState, (builder) => {
    builder
      .addCase(allAuthorAction.pending, (state) => {
        state.loadingAuthor = true;
        state.errorAuthor = null;
        state.allAuthor = [];
      })
      .addCase(allAuthorAction.fulfilled, (state, action) => {
        state.loadingAuthor = false;
        state.errorAuthor = null;
        state.allAuthor = action.payload;
      })
      .addCase(allAuthorAction.rejected, (state, action) => {
        state.loadingAuthor = false;
        state.errorAuthor = action.error.message;
        state.allAuthor = [];
      })
      .addCase(allCompanyAction.pending, (state) => {
        state.loadingCompany = true;
        state.errorcompany = null;
        state.allCompany = [];
      })
      .addCase(allCompanyAction.fulfilled, (state, action) => {
        state.loadingCompany = false;
        state.errorcompany = null;
        state.allCompany = action.payload;
      })
      .addCase(allCompanyAction.rejected, (state, action) => {
        state.loadingCompany = false;
        state.errorcompany = action.error.message;
        state.allCompany = [];
      })
      .addCase(UpdateAuthorActive.pending, (state) => {
        state.loadingAuthor = true;
        state.errorAuthor = null;
      })
      .addCase(UpdateAuthorActive.fulfilled, (state, action) => {
        state.loadingAuthor = false;
        state.errorAuthor = null;
        const index = state.allAuthor.findIndex((r) => r._id === action.payload._id);
        if (index !== -1) {
          state.allAuthor[index] = action.payload;
        }
      })
      .addCase(UpdateAuthorActive.rejected, (state, action) => {
        state.loadingAuthor = false;
        state.errorAuthor = action.error.message;
      })
      .addCase(UpdateCompanyActive.pending, (state) => {
        state.loadingCompany = true;
        state.errorcompany = null;
      })
      .addCase(UpdateCompanyActive.fulfilled, (state, action) => {
        state.loadingCompany = false;
        state.errorcompany = null;
        const index = state.allCompany.findIndex((r) => r._id === action.payload._id);
        if (index !== -1) {
          state.allCompany[index].active = !state.allCompany[index].active;
        }
      })
      .addCase(UpdateCompanyActive.rejected, (state, action) => {
        state.loadingCompany = false;
        state.errorcompany = action.error.message;
      });
  });