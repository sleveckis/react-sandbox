import FeedbackItem from "./FeedbackItem"
import PropTypes from 'prop-types'

function FeedbackList({ fb, handleDelete }) {
    return(
        <div className="feedback-list">
            {/* map returns a new array of the return values from the callback function */}
            {fb.map( (item) => {
                return(<FeedbackItem 
                    key={item.id} 
                    item={item} 
                    handleDelete={handleDelete}/>);
            })}
        </div>
    )
}

FeedbackList.propTypes = {
    fb: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        })
    ),
}

export default FeedbackList