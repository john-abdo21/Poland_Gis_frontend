
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { FilterApi } from '../../app/FetchAPI';
export const fetchFilter = createAsyncThunk(
  'filter/fetchFilter',

  async (filter) => {
    console.log('filter',filter);
    const response = await FilterApi.post("/api/complexSearch",
      {
        data: filter
      });
    console.log(response.data);
    return JSON.parse(response.data);
  }
);

const initialState = {
  searchFilter: null,
  loading: false,
  error: null,
};

const fetchSlice = createSlice({
  name: 'filterRiver',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilter.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFilter.fulfilled, (state, action) => {
        state.loading = false;
        state.searchFilter = action.payload;

      })
      .addCase(fetchFilter.rejected, (state, action) => {
        console.log('a', action);
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default fetchSlice.reducer;