import {useState} from 'react'
import Card from './shared/Card'
import Button from './shared/Button'

function FeedbackForm() {
    const [text, setText] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');


    const handleTextChange = (e) => {
        if(text === ''){
            setBtnDisabled(true)
            setMessage(null)
            console.log('HERE1')
        } else if (text !== '' && text.trim().length <10) {
            setMessage('Text must be at least 10 characters')
            setBtnDisabled(true);
            console.log('HERE2')
        } else {
            setMessage(null);
            setBtnDisabled(false);
            console.log('HERE3')
        }
        // e.target.value is the current user-input text in the form field
        setText(e.target.value)
    }


  return (
    <Card>
        <form>
            <h2>How would you rate your experience?</h2>
            {/* TODO: Select rating component */}
            <div className="input-group">
                {/* onChange == get info as the input text changes */}
                <input onChange={handleTextChange} type="text" placeholder='Write a review'/>
                <Button type='submit' isDisabled={btnDisabled} version='secondary'>Send</Button>
            </div>

            {/* If there's a message, then make a div with the className message that contains the message*/}
            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm