import React from 'react'
import {useState} from 'react'

function FeedbackItem() {
    {/*Set up initial states          [x.y] = useState(a)            where x is a, and y is a function to set x it something else*/}
    const [rating, setRating] = useState(7)
    const [text, setText] = useState('This is an example of card text')

    return (
    <div className="card">
        <div className="num-display">{rating}</div>
        <div className="text-display">{text}</div>
    </div>

    )
}

export default FeedbackItem