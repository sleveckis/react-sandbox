import PropTypes from 'prop-types'

function Header({ text, bgColor, textColor }) {
    {/* Storing the css props*/}
    const headerStyle = {
        backgroundColor: bgColor,
        color: textColor,
    }

    return (
    <header style = {headerStyle}>
        <div className="container">
            <h2>{text}</h2>
        </div>
    </header>
    )
}

// provide type checking for parameter(s) (read: props)
Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
};

// default parameters if nothing is passed in via the html element in App.js
// akin to Header(text="Default Text") a la python
Header.defaultProps = {
    text: 'Default Text',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95',
};


export default Header