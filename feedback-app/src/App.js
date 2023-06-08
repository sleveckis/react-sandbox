import Header from "./components/Header"
import FeedbackData from "./data/FeedbackData"
import FeedbackItem from "./components/FeedbackItem"
import FeedbackForm from "./components/FeedbackForm"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import { isValidElement, useState } from 'react'

function App() {
    // Pass in the data in FeedbackData.js as a state thingy so we can pass it to other components, namely FeedbackList.jsx
    const [feedback, setFeedback] = useState(FeedbackData);
    feedback.forEach( (x) => {
        console.log("Item " + x.id);
        console.log("Info: " + x.rating)
        console.log("Review: " + x.text);
        console.log("--------------------------------");
    })

    // here at App we define the delete function, but we pass it to ...List and then ...Item
    // filter() is a H.O. function that we are asking to only keep items whose ids are NOT the deletion id
    const handleDelete = (id) => {
        if(window.confirm('Are you sure you want to delete this listing?')){
            setFeedback(feedback.filter((item) => item.id != id))
        }
    }

    return (
        <>
            <Header />
            <div className="container">
                {/* Notice the 'prop drilling' starts here; goes down to Feedbackitem using handleDelete */}
                <FeedbackStats fb={feedback}/>
                <FeedbackForm />
                <FeedbackList fb = {feedback} handleDelete={handleDelete} />
            </div>
        </>
    )
}

export default App