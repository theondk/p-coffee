import Nav from "../nav/Nav";
import SHeader from "../sHeader/SHeader";
import Info from "../info/Info";
import Catalog from "../catalog/Catalog";
import Footer from '../footer/Footer';

import img from '../../resources/imgs/pleasure_img.jpg';
import { Helmet } from "react-helmet";

const PleasurePage = () => {
    const descr = "Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.<br/><br/> Afraid at highly months do things on at. Situation recommend objection do intention so questions.  As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face."
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="pleasure page"
                />
                <title>Pleasure</title>
            </Helmet>
            <Nav className="nav-header"/>
            <SHeader bg={'coffee_header_pleasure'} title="For your pleasure"/>
            <Info title="About our goods" descr={descr} img={img}/>
            <Catalog/>
            <Footer>
                <Nav className="nav-footer"/>
            </Footer>
        </>
    );
};

export default PleasurePage;