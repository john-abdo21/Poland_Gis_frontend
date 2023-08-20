
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
    toSearch: {
        isLand: false,
        isForest: false,
        isRiver: false,
        isLake: false,
        isOther: false,
    },
    options: {
        land: {},
        forest: {},
        river: {
            distance: {
                isSet: false,
                minDistance: {
                    isSet: false,
                    value: 0.0
                },
                maxDistance: {
                    value: 10.0
                }
            },
            length: {
                isSet: false,
                minLength: {
                    value: 0.0
                },
                maxLength: {
                    isSet: false,
                    value: 10.0
                }
            },
            width: {
                isSet: false,
                minWidth: {
                    value: 0.0
                },
                maxWidth: {
                    isSet: false,
                    value: 10.0
                }
            },
            name: {
                isSet: false,
                method: {
                    value: 'Include'
                },
                reference: {
                    value: ''
                }
            },
        },
        lake: {},
    },
    error: null
}
const optionReducer = createSlice({
    name: 'optionReducer',
    initialState,
    reducers: {
        setIsLand: (state, action) => {
            state.toSearch.isLand = action.payload;
        },
        setIsForest: (state, action) => {
            state.toSearch.isForest = action.payload;
        },
        setIsRiver: (state, action) => {
            state.toSearch.isRiver = action.payload;
        },
        setIsLake: (state, action) => {
            state.toSearch.isLake = action.payload;
        },
        setIsOther: (state, action) => {
            state.toSearch.isOther = action.payload;
        },
        setIsRiverDistance: (state, action) => {
            state.options.river.distance.isSet = action.payload;
        },
        setIsMinRiverDistance: (state, action) => {
            state.options.river.distance.minDistance.isSet = action.payload;
        },
        setIsRiverLength: (state, action) => {
            state.options.river.length.isSet = action.payload;
        },
        setIsRiverMaxLength: (state, action) => {
            state.options.river.length.maxLength.isSet = action.payload;
        },
        setIsRiverWidth: (state, action) => {
            state.options.river.width.isSet = action.payload;
        },
        setIsRiverMaxWidth: (state, action) => {
            state.options.river.width.maxWidth.isSet = action.payload;
        },
        setIsRiverName: (state, action) => {
            state.options.river.name.isSet = action.payload;
        },
    }
});
export const {
    setIsLand,
    setIsForest,
    setIsRiver,
    setIsLake,
    setIsOther,
    setIsRiverDistance,
    setIsMinRiverDistance,
    setIsRiverLength,
    setIsRiverMaxLength,
    setIsRiverWidth,
    setIsRiverMaxWidth,
    setIsRiverName,
} = optionReducer.actions;
export default optionReducer.reducer;