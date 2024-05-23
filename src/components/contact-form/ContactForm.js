import './ContactForm.css'
import React, {useState} from 'react';

function ContactForm(){

    const [clicked, setClicked]=useState(false)

    const onClickTrueHandler = () => {
        setClicked(true)
    }
    const onClickFalseHandler = () => {
        setClicked(false)
    }
    if (clicked !== true)
    return (
    <div className='contact-form-Bigwrapper'>
    <div className='contact-form-wrapper'>
        <div className='contact-form-headings'>
        <span className='contact-form-entry-text'>
        You have a question for us? Our operators are waiting for you...
        </span>

        <span className='contact-form-title'>
        Contact us!
        </span>
        </div>

        <div className='contact-form-input-fields'>

            <span className='contact-form-label'>Your e-mail:</span>
            <input type='email' placeholder='your email goes here' className='contact-form-input-field'>
            </input>
            <label className='contact-form-label'>Your message:</label>
            <textarea className='contact-form-textarea' placeholder='hello, i am looking for a speedy boi'></textarea>
        </div>
        <button className='contact-form-submit-button' onClick={onClickTrueHandler}>Send e-mail</button>
    </div>
    </div>
    )
    else {
        return (
        <button onClick={onClickFalseHandler} className='buttton'> send again</button>
        )
    }
}
export default ContactForm