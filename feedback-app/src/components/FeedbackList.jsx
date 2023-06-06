function FeedbackList({ feedback }) {
    return(
    <div>
        {feedback.map( (x) => {
            <p>{x.id}</p>
        })}
    </div>
    )
}

export default FeedbackList