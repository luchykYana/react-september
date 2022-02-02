import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {carService} from '../services';

const initialState = {
    cars: [],
    status: null,
    error: null,
    carForUpdate: null
}

export const getAllCars = createAsyncThunk(
    'cars/getAllCars',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await carService.getAll();

            return data;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

export const createCarThunk = createAsyncThunk(
    'cars/createCar',
    async (newCar, {dispatch}) => {
        try {
            const data = await carService.create(newCar);

            dispatch(addCar({data}));
        } catch (e) {
            console.log(e.message);
        }
    }
);

export const deleteCarThunk = createAsyncThunk(
    'cars/deleteCar',
    async ({id}, {dispatch}) => {
        try {
            await carService.deleteById(id);

            dispatch(deleteCar({id}));
        } catch (e) {
            console.log(e.message);
        }
    }
);

export const updateCarThunk = createAsyncThunk(
    'cars/updateCar',
    async ({id, car}) => {
        try {
            const newCar = await carService.updateById(id, car);

            return ({car: newCar});
        } catch (e) {
            console.log(e.message);
        }
    }
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        addCar: (state, action) => {
            state.cars.push(action.payload.data);
        },
        deleteCar: (state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload.id);
        },
        carToUpdate: (state, action) => {
            state.carForUpdate = action.payload.car;
        },
    },
    extraReducers: {
        [getAllCars.pending]: (state) => {
            state.status = 'pending';
        },
        [getAllCars.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.cars = action.payload;
        },
        [getAllCars.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },

        [updateCarThunk.fulfilled]: (state, action) => {
            const index = state.cars.findIndex(car => car.id === action.payload.car.data.id);

            state.cars[index] = action.payload.car.data;
            state.carForUpdate = null;
        }
    }
})

const carReducer = carSlice.reducer;
const {addCar, deleteCar, carToUpdate} = carSlice.actions;

export default carReducer;

export const carActions = {
    addCar, deleteCar, carToUpdate
};
