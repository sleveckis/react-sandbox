import React from 'react'
import {useState} from 'react'

function FeedbackItem() {
    {/*Set up initial states          [x.y] = useState(a)            where x is a, and y is a function to set x it something else*/}
    const [rating, setRating] = useState(7)
    const [text, setText] = useState('This is an example of card text')


    {/* Function to change state and have it effect other components */}
    const handleClick1 = () => {setText('This is some other text we changed by pressing the button')};
    const handleClick2 = () => {setRating( (prev) => {
        let ret = prev +1;
        {/* Ternary operator to change ret to 0 if it would go past 10*/}
        return (ret > 10) ? 0 : ret;
    })};

    return (
    <div className="card">
        <div className="num-display">{rating}</div>
        <div className="text-display">{text}</div>
        {/* Button that executes handleClick on a click with the text of 'Change Text' */}
        <button onClick = {handleClick1}>Change Text</button>
        <button onClick = {handleClick2}>Change Rating Number</button>
    </div>

    )
}

export default FeedbackItem