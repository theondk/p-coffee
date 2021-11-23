import devider from '../../resources/icons/devider.png';
import './singleCoffeInfo.scss';
import { httpReq } from '../../services/index';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../spinner/Spinner';

const SingleCoffeInfo = () => {
    const { request } = httpReq();
    const { coffeeId } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        request(`https://p-coffee.herokuapp.com/api/coffee?id=${coffeeId}`)
            .then(data => setItem(data))
    }, []);

    const isLoaded = item ? <View coffee={item}/> : <Spinner/>;

    return (
        <section className="single-coffee">
            <div className="container">
                <div className="single-coffee__wrapper">
                    {isLoaded}
                </div>
            </div>
        </section>
    );
};

const View = ({coffee}) => {
    coffee = coffee[0];
    return (
        <>
            <img className="single-coffee__img" src={coffee.img} alt="info"/>
            <div className="single-coffee__info">
                <div className="single-coffee__info-title title-small">About it</div>
                <div className="devider">
                    <img src={devider} alt="devider"/>
                </div>
                <div className="single-coffee__info-country"><span>Country:</span> {coffee.country}</div>
                <div className="single-coffee__info-descr"><span>Description:</span> {coffee.description}</div>
                <div className="single-coffee__info-price"><span>Price:</span> {coffee.price}</div>
            </div>
        </>
    )
}

export default SingleCoffeInfo;