import './sHeader.scss';

const SHeader = ({title, bg}) => {
    return (
        <header className={"coffee_header " + bg}>
            <h1 className="title-big">{title}</h1>
        </header>
    );
};

export default SHeader;