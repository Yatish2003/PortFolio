import React from 'react'
import Swal from 'sweetalert2'
import "./Contact.css"
import { useForm, ValidationError } from '@formspree/react';
function Contact() {
    const [state, handleSubmit] = useForm("mzzbgpkw");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>
    }
    function sweetaAlert(){
        Swal.fire("Thanks for contacting");
    }
    return (
        <>

<h1 className="contact">Get in Touch!</h1>
<div className="cnt-main" id='contact'>
    <div className="border-div">
        <form onSubmit={handleSubmit}>
            <div className="form-container">
                <label htmlFor="email">Email Address:</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    required
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <button
                    type="submit"
                    disabled={state.submitting}
                    onClick={sweetaAlert}
                >
                    Submit
                </button>
            </div>
        </form>
        <div className="social-icons">
            <i className="fa-brands fa-whatsapp"></i>
            <i className="fa-brands fa-github"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-twitter"></i>
        </div>
    </div>
</div>



        </>
    )
}

export default Contact
