import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    activeFilter: 'All',
    searchString: ''
}

const filterSearchSlice = createSlice({
    name: "filterSearch",
    initialState,
    reducers: {
        filterSelect: (state, action) => { state.activeFilter = action.payload },
        searchInput: (state, action) => { state.searchString = action.payload }
    }
});

const { actions, reducer } = filterSearchSlice;

export default reducer;

export const {
    filterSelect,
    searchInput
} = actions;