import Nav from '../../nav/Nav';
import SHeader from '../../sHeader/SHeader';
import SingleCoffeInfo from '../../singleCoffeInfo/SingleCoffeInfo';
import Footer from '../../footer/Footer';

const SingleCoffeePage = () => {
    return (
        <>
            <Nav className="nav-header"/>
            <SHeader bg={'coffee_header_pleasure'} title="Our Coffee"/>
            <SingleCoffeInfo/>
            <Footer>
                <Nav className="nav-footer"/>
            </Footer>
        </>
    );
};

export default SingleCoffeePage;