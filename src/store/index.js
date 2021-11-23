import { configureStore } from '@reduxjs/toolkit';
import coffee from '../slices/coffeeSlice';
import filterSearch from '../slices/filterSearchSlice'; 

const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        });
    }

    return next(action);
}

const store = configureStore({
    reducer: {coffee, filterSearch},
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
    devTools: process.env.NODE_ENV !== 'production'
});

export default store;