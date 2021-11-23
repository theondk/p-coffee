import HousePage from '../pages/HousePage';
import CoffeePage from '../pages/cofeePage/CoffeePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PleasurePage from '../pages/PleasurePage';
import SingleCoffeePage from '../pages/singleCoffeePage/SingleCoffeePage';
import { fetchCoffee } from '../../slices/coffeeSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCoffee());
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<HousePage/>}/>
                <Route path="/coffee" element={<CoffeePage/>}/>
                <Route path="/pleasure" element={<PleasurePage/>}/>
                <Route path="/coffee/:coffeeId" element={<SingleCoffeePage/>}/>
            </Routes>
        </Router>
    );
};

export default App;