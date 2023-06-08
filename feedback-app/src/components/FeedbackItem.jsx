import {useState} from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types'
import { FaTimes } from 'react-icons/fa'

function FeedbackItem({item, handleDelete}) {
    return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <button onClick={() => handleDelete(item.id)} className='close'><FaTimes color='black' /></button>
        <div className="text-display">{item.text}</div>
    </Card>
    )
}

FeedbackItem.propTypes = {
    // typechecking item to be an object
    item: PropTypes.object.isRequired,
    handleDelete: PropTypes.func.isRequired,

}

export default FeedbackItem