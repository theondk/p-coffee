import './catalog.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoffee } from '../../slices/coffeeSlice';
import Spinner from '../spinner/Spinner';
import { createSelector } from '@reduxjs/toolkit';
import { Link } from 'react-router-dom';

const Catalog = () => {
    const activeFilter = createSelector(
        (state) => state.filterSearch.activeFilter,
        (state) => state.filterSearch.searchString,
        (state) => state.coffee.coffee,
        (filter, searchString, coffee) => {
            if (filter === 'All') {
                return coffee.filter(item => item.name.indexOf(searchString) > -1)
            } else {
                return coffee.filter(item => item.name.indexOf(searchString) > -1 && item.country === filter)
            }
        }
    );

    const filtered = useSelector(activeFilter);
    const { coffeeLoadingStatus } = useSelector(state => state.coffee);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCoffee());
    }, []);
    
    const isLoading = coffeeLoadingStatus === 'loading' ? <Spinner/> : null;
    const isLoaded = coffeeLoadingStatus === 'idle' ? <View coffee={filtered}/> : null;

    return (
        <section className="catalog">
            <div className="container">
                {isLoading}
                {isLoaded}
            </div>
        </section>
    );
};

const View = ({coffee}) => {
    const content = coffee.map(item => {
        return (
            <Link to={"/coffee/" + item.id} key={item.id} className="catalog__item">
                <img className="catalog__item-img" src={item.img} alt="coffee-img"/>
                <div className="catalog__item-name">{item.name}</div>
                <div className="catalog__item-country">{item.country}</div>
                <div className="catalog__item-price">{item.price}</div>
            </Link>
        )
    });

    return (
        <div className="catalog__items">
            {content}
        </div>
    )
}

export default Catalog;