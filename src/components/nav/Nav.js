import './nav.scss';
import { NavLink } from 'react-router-dom';

const Nav = ({className}) => {
    return (
        <nav className={className + " nav"}>
            <ul className="nav__list">
                <NavLink to="/" className={(navData) => navData.isActive ? 'nav__list-item nav__list-item_active' : 'nav__list-item'}>Coffee house</NavLink>
                <NavLink to="/coffee" className={(navData) => navData.isActive ? 'nav__list-item nav__list-item_active' : 'nav__list-item'}>Our coffee</NavLink>
                <NavLink to="/pleasure" className={(navData) => navData.isActive ? 'nav__list-item nav__list-item_active' : 'nav__list-item'}>For your pleasure</NavLink>
            </ul>
        </nav>
    );
};

export default Nav;