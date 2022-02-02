import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {userService} from '../services';

const initialState = {
    users: [],
    status: null,
    error: null
}

export const getAllUsersThunk = createAsyncThunk(
    'users/getAllUsersThunk',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await userService.getAllUsers();

            return data;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {},
    extraReducers: {
        [getAllUsersThunk.pending]: (state) => {
            state.status = 'pending';
        },
        [getAllUsersThunk.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.users = action.payload;
        },
        [getAllUsersThunk.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
});

const userReducer = userSlice.reducer;

export default userReducer;
