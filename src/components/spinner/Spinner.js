import spinner from '../../resources/spinner.gif';
import './spinner.scss';

const Spinner = () => {
    return (
        <img className="spinner" src={spinner} alt="spinner"/>
    );
};

export default Spinner;