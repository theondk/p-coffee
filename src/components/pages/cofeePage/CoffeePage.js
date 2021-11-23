import Nav from '../../nav/Nav';
import Footer from '../../footer/Footer';
import SHeader from '../../sHeader/SHeader';
import Info from '../../info/Info';
import Search from '../../search/Search';
import Filter from '../../filter/Filter';
import Catalog from '../../catalog/Catalog';

import './coffeePage.scss';
import img from '../../../resources/imgs/girl.jpg';

const CoffeePage = () => {
    const descr = "Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.<br/><br/> Afraid at highly months do things on at. Situation recommend objection do intention so questions.  As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face."

    return (
        <>
            <Nav className="nav-header"/>
            <SHeader bg={'coffee_header_coffee'} title="Our Coffee"/>
            <Info title="About our beans" descr={descr} img={img}/>
            <div className="search_filter">
                <div className="container">
                    <div className="search_filter__wrapper">
                        <Search/>
                        <Filter/>
                    </div>
                </div>
            </div>
            <Catalog/>
            <Footer>
                <Nav className="nav-footer"/>
            </Footer>
        </>
    );
};

export default CoffeePage;