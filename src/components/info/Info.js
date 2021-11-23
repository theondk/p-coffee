import devider from '../../resources/icons/devider.png';

import './info.scss';

const Info = ({title, descr, img}) => {
    return (
        <section className="info">
            <div className="container">
                <div className="info__wrapper">
                    <img className="info__img" src={img} alt="girl"/>
                    <div className="info__content">
                        <div className="info__content-title title-small">{title}</div>
                        <div className="devider">
                            <img src={devider} alt="devider"/>
                        </div>
                        <div className="info__content-descr">{descr}</div>
                    </div>
                </div>
                <div className="common-devider"></div>
            </div>            
        </section>
    );
};

export default Info;