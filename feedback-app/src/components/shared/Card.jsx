import PropTypes from 'prop-types'

function Card({ children, reverse }) {
{/* 'children' is a RESERVED prop that EVERY component has access to by default */}
{/* what it returns is everything inside the component, in the context it was called */}

{/* in the below comment, class is 'card reverse' if reverse prop is true */};
{/* the below comment is dynamically allocating a classname*/}

  {/*
  return (
    <div className={`card ${reverse && 'reverse'}`}>
        {children}
    </div>
  )
  */}


{/* the below code is dynamically allocating a style in-line. that and the comment above are == */}
return( 
        <div 
        className="card" 
        style={{
            backgroundColor: reverse ? 'rgba(0,0,0,0.4)': '#fff',
            color: reverse ? '#fff' : '#000',
        }}
        >
            {children}
        </div>
    )
}

Card.defaultProps = {
    reverse: false,
}

{/* note that 'children' is of type prop*/}
Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
}

export default Card