import { searchInput } from '../../slices/filterSearchSlice';
import { useDispatch } from 'react-redux';

import './search.scss';

const Search = () => {
    const dispatch = useDispatch();

    const changeSearchString = (e) => {
        dispatch(searchInput(e.target.value))
    }

    return (
        <div className="search">
            <div className="search__label">Lookiing for</div>
            <input onChange={changeSearchString} className="search__input" placeholder="start typing here..."/>
        </div>
    );
};

export default Search;