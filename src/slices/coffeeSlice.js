import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { httpReq } from '../services';

const initialState = {
    coffee: [],
    coffeeLoadingStatus: 'idle'
}

export const fetchCoffee = createAsyncThunk(
    'coffee/fetchCoffee',
    async () => {
        const { request } = httpReq();
        return await request("http://https://p-coffee.herokuapp.com/api/coffee");
    }
)

const coffeeSlice = createSlice({
    name: 'coffee',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchCoffee.pending, state => { state.coffeeLoadingStatus = 'loading' })
            .addCase(fetchCoffee.fulfilled, (state, action) => { 
                state.coffeeLoadingStatus = 'idle';
                state.coffee = action.payload;
            })
            .addCase(fetchCoffee.rejected, state => { state.coffeeFetchingError = 'error' })
            .addDefaultCase(() => {});
    }
});

const { reducer } = coffeeSlice;

export default reducer;