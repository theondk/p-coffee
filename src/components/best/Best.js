
import { useSelector } from 'react-redux';

import Spinner from '../spinner/Spinner';
import './best.scss';
import { Link } from 'react-router-dom';

const Best = () => {
    const { coffee, coffeeLoadingStatus } = useSelector(state => state.coffee);
    const purchases = [...coffee].sort((a, b) => b.purchases - a.purchases).slice(0, 3);

    const isLoaded = coffeeLoadingStatus === 'idle' ? <View purchases={purchases}/> : null;
    const isLoading = coffeeLoadingStatus === 'loading' ? <Spinner/> : null;

    return (
        <section className="best">
            <div className="container">
                <div className="title-small">Our best</div>
                {isLoading}
                <div className="best__wrapper">
                    {isLoaded}
                </div>
            </div>
        </section>
    );
};

const View = ({purchases}) => {
    return(
        purchases.map(item => {
            return (
                <Link to={"/coffee/" + item.id} className="best__card" key={item.id}>
                    <img className="best__card-img" src={item.img} alt="coffee-img"/>
                    <div className="best__card-name">{item.name}</div>
                    <div className="best__card-price">{item.price}</div>
                </Link>
            )
        })
    )
}

export default Best;