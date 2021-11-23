import Nav from '../../nav/Nav';
import SHeader from '../../sHeader/SHeader';
import SingleCoffeInfo from '../../singleCoffeInfo/SingleCoffeInfo';
import Footer from '../../footer/Footer';
import { Helmet } from 'react-helmet';

const SingleCoffeePage = () => {
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Single coffee info"
                />
                <title>Coffee</title>
            </Helmet>
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