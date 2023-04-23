import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';
import {
  addContactsThunk,
  delContactsThunk,
  getContactsThunk,
} from './operations';

const handlePaending = state => {
  state.isLoading = true;
};

const handleReject = (state, { payload }) => {
  state.error = payload;
};

export const sliceContact = createSlice({
  name: 'contacts',
  initialState: {
    items: [
      // { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      // { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      // { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      // { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.pending, handlePaending)
      .addCase(getContactsThunk.rejected, handleReject)
      .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(addContactsThunk.pending, handlePaending)
      .addCase(addContactsThunk.rejected, handleReject)
      .addCase(addContactsThunk.fulfilled, (state, { payload }) => {
        state.items = [payload, ...state.items];
      })
      .addCase(delContactsThunk.pending, handlePaending)
      .addCase(delContactsThunk.rejected, handleReject)
      .addCase(delContactsThunk.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(item => item.id !== payload.id);
      });
  },
});

export const { addContactsActions, delContactsActions } = sliceContact.actions;
export const contactsReducer = sliceContact.reducer;