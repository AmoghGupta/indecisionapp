const Header = (props) => {
    return (
        <div className="header">
            <div className="container">
                <h1 className="header-title">{props.title}</h1>
                {props.subtitle && <h2 className="header-subtitle">{props.subtitle}</h2>}
            </div>
        </div>
    );
};

Header.defaultProps = {
    title: 'Indecision'
};

export {Header};