import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {userService} from '../services';

const initialState = {
    posts: [],
    status: null,
    error: null
}

export const getAllPostsThunk = createAsyncThunk(
    'posts/getAllPostsThunk',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await userService.getAllPosts();

            return data;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers: {},
    extraReducers: {
        [getAllPostsThunk.pending]: (state) => {
            state.status = 'pending';
        },
        [getAllPostsThunk.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.posts = action.payload;
        },
        [getAllPostsThunk.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
});

const postReducer = postSlice.reducer;

export default postReducer;
