import Header from "./components/Header"
import FeedbackData from "./data/FeedbackData"
import FeedbackItem from "./components/FeedbackItem"
import FeedbackList from "./components/FeedbackList"
import { useState } from 'react'

function App() {
    // Pass in the data in FeedbackData.js as a state thingy so we can pass it to other components, namely FeedbackList.jsx
    const [feedback, setFeedback] = useState(FeedbackData);
    feedback.forEach( (x) => {
        console.log("Item " + x.id);
        console.log("Info: " + x.rating)
        console.log("Review: " + x.text);
        console.log("--------------------------------");
    })
    return (
        <>
            <Header />
            <div className="container">
                <FeedbackList feedback={feedback} />
            </div>
        </>
    )
}

export default App