import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {userService} from '../services';

const initialState = {
    comments: [],
    status: null,
    error: null
}

export const getAllCommentsThunk = createAsyncThunk(
    'comments/getAllCommentsThunk',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await userService.getAllComments();

            return data;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

const commentSlice = createSlice({
    name: 'commentSlice',
    initialState,
    reducers: {},
    extraReducers: {
        [getAllCommentsThunk.pending]: (state) => {
            state.status = 'pending';
        },
        [getAllCommentsThunk.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.comments = action.payload;
        },
        [getAllCommentsThunk.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
});

const commentReducer = commentSlice.reducer;

export default commentReducer;
