
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { FilterApi } from '../../app/FetchAPI';

export const fetchReducer = createAsyncThunk(
    'filter/fetchReducer',
    async (filter) => {
        const response = await FilterApi.post("/api/complexSearch",
            {
                data: filter
            });
        console.log(response.data);
        return JSON.parse(response.data);
    }
);
const initialState = {
    viewSide1: false,
    viewSide2: false,
    loading: false,
    error: null,
};
const stateReqReducer = createSlice({
    name: 'stateReqReducer',
    initialState,
    reducers: {
        toggleView1: (state) => {
            state.viewSide1 = true;
        },
        toggleView2: (state) => {
            state.viewSide2 = true;
        },
        hide: (state) => {
            state.viewSide1 = false;
            state.viewSide2 = false;
        },
    }
});
export const { toggleView1, toggleView2,hide} = stateReqReducer.actions;
export default stateReqReducer.reducer;