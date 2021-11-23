import './header.scss';
import img from '../../resources/icons/title_ico.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header title-big">
            <div className="container">
                <div className="header__title">Everything You Love About Coffee</div>
                <div className="header__img">
                    <img src={img} alt="coffee-icon"/>
                </div>
                <div className="header__subtitle">We makes every day full of energy and taste</div>
                <div className="header__subtitle-question">Want to try our beans?</div>
            </div>
            <Link to="/coffee" className="header__btn">More</Link>
        </header>
    );
};

export default Header;