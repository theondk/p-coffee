import './footer.scss';
import devider from '../../resources/icons/devider.png';

const Footer = (props) => {
    return (
        <footer className="footer">
            <div className="container">
                {props.children}
                <div className="devider">
                    <img src={devider} alt="devider"/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;