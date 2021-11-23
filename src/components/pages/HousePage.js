import Nav from '../nav/Nav';
import Header from '../header/Header';
import About from '../about/About';
import Best from '../best/Best';
import Footer from '../footer/Footer';
import { Helmet } from 'react-helmet';

const HousePage = () => {
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="main page"
                />
                <title>Home page</title>
            </Helmet>
            <Nav className="nav-header"/>
            <Header/>
            <About/>
            <Best/>
            <Footer>
                <Nav className="nav-footer"/>
            </Footer>
        </>
    );
};

export default HousePage;