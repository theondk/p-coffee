import { useDispatch } from 'react-redux';
import { filterSelect } from '../../slices/filterSearchSlice';
import { useRef } from 'react';

import './filter.scss';

const Filter = () => {
    const dispatch = useDispatch();
    const filterRefs = useRef([]);

    const changeActiveFilter = (e, idx) => {
        dispatch(filterSelect(e.target.getAttribute('data-filter')));
        filterRefs.current.forEach(item => {item.classList.remove('filter__button_selected')});
        filterRefs.current[idx].classList.add('filter__button_selected');
    }

    const filters = ['All', 'Brasil', 'Kenya', 'Columbia'];
    const filtersContent = filters.map((item, i) => {
        return(
            <button 
                ref={el => filterRefs.current[i] = el} 
                onClick={(e) => changeActiveFilter(e, i)} 
                key={item} 
                data-filter={item} 
                type="button" className="filter__button"
            >
                {item}
            </button>
        )
    })

    return (
        <div className="filter">
            <div className="filter__label">Or filter</div>
            {filtersContent}
        </div>
    );
};

export default Filter;