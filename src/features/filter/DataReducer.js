
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { FilterApi } from '../../app/FetchAPI';

export const fetchReducer = createAsyncThunk(
  'filter/fetchDatas',

  async (filter) => {
    if (filter['data'] === 'hospital') {
      const response = await FilterApi.post("/api/requestPoint",
        {
          data: filter
        });
      console.log('1', response.data);
      return JSON.parse(response.data);
    } else {
      const response = await FilterApi.post("/api/requestData",
        {
          data: filter
        });
      console.log('2', response.data);
      return JSON.parse(response.data);
    }
  }
);

const initialState = {
  river: null,
  lake: null,
  forest: null,
  station: null,
  hospital: null,
  land: null,
  loading: false,
  error: null,
  riverView: false,
  lakeView: false,
  forestView: false,
  stationView: false,
};

const fetchDatas = createSlice({
  name: 'filterRiver',
  initialState,
  reducers: {
    toggleRiverView: (state) => {
      state.riverView = !state.riverView;
    },
    toggleLakeView: (state) => {
      state.lakeView = !state.lakeView;
    },
    toggleForestView: (state) => {
      state.forestView = !state.forestView;
    },
    toggleStationView: (state) => {
      state.stationView = !state.stationView;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchReducer.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchReducer.fulfilled, (state, action) => {
        state.loading = false;
        console.log('a', action.payload);
        if (action.payload['key'] === 'R')
          state.river = action.payload['val'];
        else if (action.payload['key'] === 'L')
          state.lake = action.payload['val'];
        else if (action.payload['key'] === 'F')
          state.forest = action.payload['val'];
        else if (action.payload['key'] === 'hospital')
          state.hospital = action.payload['val'];
        else if (action.payload['key'] === 'P')
          state.land = action.payload['val'];
      })
      .addCase(fetchReducer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        console.log(action.error.message);
      });
  },
});
export const { toggleRiverView, toggleLakeView, toggleForestView, toggleStationView } = fetchDatas.actions;
export default fetchDatas.reducer;