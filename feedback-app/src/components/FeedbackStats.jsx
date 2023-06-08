import PropTypes from 'prop-types'

function FeedbackStats({ fb }) {

  let rat_avg = fb.reduce((acc, cur) => {
    return acc + cur.rating
  }, 0) / fb.length


  // toFixed keeps to 1 sig fig
  // regex to replace a x.0 value with just x
  rat_avg = rat_avg.toFixed(1).replace(/[.,]0$/,'')

  return (
    <div className="feedback-stats">
      <h4>{fb.length} Reviews</h4>
      <h4>Average Rating: {isNaN(rat_avg) ? 'No reviews yet.' : rat_avg}</h4>
    </div>
  )
}

FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired,
}

export default FeedbackStats