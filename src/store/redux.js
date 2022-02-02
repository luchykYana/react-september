import {configureStore} from "@reduxjs/toolkit";

import carReducer from './car.slice';
import commentReducer from './comment.slice';
import postReducer from './post.slice';
import userReducer from './user.slice';

export const store = configureStore({
    reducer: {
        carReducer,
        userReducer,
        postReducer,
        commentReducer
    }
});
