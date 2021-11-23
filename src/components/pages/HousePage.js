import Nav from '../nav/Nav';
import Header from '../header/Header';
import About from '../about/About';
import Best from '../best/Best';
import Footer from '../footer/Footer';

const HousePage = () => {
    return (
        <>
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