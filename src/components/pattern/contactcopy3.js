import { Component } from "react"
import TextareaAutosize from "react-autosize-textarea"
import { sendContactMail } from "../networking/mail-api"
import React from 'react'


class Contact extends Component {
    state = {
        formButtonDisabled: false,
        formButtonText: "Send",
        firstName: "",
        lastName: "",
        mail: "",
        formContent: ""
    }

    render() {    
        const { formButtonText, formButtonDisabled, name, mail, tel, formContent } = this.state
        
        const btnClass = formButtonDisabled ? "disabled" : "" 
//[2]

        return (
            <div>               
                <div className="grid">  
                    <div className="col-8">
                        <h2>Contact James</h2>
                        <p>Send a message direct to Secretary/Treasurer Loder!</p>                    
                    </div>
                </div>
                <div className="grid">
                    <div className="col-4">
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            name="fname"
                            required={true}
                            onChange={this.onNameChange} />
                    </div>
                    <div className="col-4">
                        <input
                            type="email"
                            placeholder="E-Mail"
                            value={mail}
                            name="email"
                            required={true}
                            onChange={this.onMailChange} />
                    </div>
                    <div className="col-4">
                        <input
                            type="tel"
                            placeholder="Phone"
                            value={tel}
                            name="phone"
                            required={true}
                            onChange={this.onTelChange} />
                    </div>          
                </div>
                <div className="grid">
                    <div className="col-8">
                        <TextareaAutosize
                            name="text"
                            placeholder="Your Message"
                            value={formContent}
                            onChange={this.onFormContentChange}
                            style={{
                                minHeight: "48px",
                                width: "100%",
                                border: "none",
                                borderBottom: "1px solid #000",
                                borderRadius: "0px",
                                margin: "20px 0px",
                                resize: "none",
                                padding: "0px",
                                paddingBottom: "14px",
                                WebkitAppearance: "none",
                                MozAppearance: "none"
                            }} /> 

                    </div>
                    <div className="col-8">
                        <button
                            className={btnClass}
                            type="submit"
                            onClick={this.submitContactForm}
                            disabled={formButtonDisabled}>

                           {formButtonText}
                       </button>
                    </div>
                </div>
                <style jsx>{`
                    .grid {
                        display: flex;
                        flex-direction: row;
                        flex-wrap: wrap;
                        max-width: 1280px;
                        margin-right: auto;
                        margin-left: auto;
                        padding-left: 12px;
                        padding-right: 12px;
                        
                    }

                    .col-4,
                    .col-8 {
                        padding: 8px 12px;
                        box-sizing: border-box;
                        
                    }
                    .col-4 {
                        flex-basis: 50%;
                        max-width: 50%;
                    }
                    .col-8 {
                        flex-basis: 100%;
                        max-width: 100%;
                        
                    }
                    @media only screen and (max-width: 768px) {
                        .grid {
                            flex-direction: column;
                            padding-left: 0px;
                            padding-right: 0px;
                        }
                        .col-4,
                        .col-8 {
                            padding-left: 24px;
                            padding-right: 24px;
                            flex-basis: 100%;
                            max-width: 100%;
                        }
                    }
                    
                    input[type=text], input[type=email], input[type=tel], input[name=text] {
                        height: 48px;
                        width: 100%;
                        border: none;
                        border-radius: 0px;
                        border-bottom: 1px solid #121212;
                        margin: 8px 0px;
                        box-shadow: none;
                        -webkit-appearance: none;
                        -moz-appearance: none;
                        padding: 0px;
                        outline: none;
                        
                    }

                    ::placeholder {
                        color: #C8CBCE;
                    }

                    ::-ms-input-placeholder {
                        color: #C8CBCE;
                    }

                    button {
                        background-color: white; 
                        color: black; 
                        border: 3px solid #008CBA;
                    }

                    button:hover {
                        background-color: #008CBA;
                        color: white;
                    }

                    .disabled {
                        background-color: #fff;
                        color: #121212;
                        cursor: auto;
                        padding-left: 0px;
                    }

                    .js-focus-visible :focus:not(.focus-visible) {
                        outline: none;
                    }

                    input.focus-visible {
                        color: red;
                        outline: 1px solid red;
                    }
                `}</style>
            </div>
        )
    }

    onNameChange = (event) => {
        this.setState({ name: event.target.value })
    }
//[5]

    onMailChange = (event) => {
        this.setState({ mail: event.target.value })
    }

    onTelChange = (event) => {
        this.setState({ tel: event.target.value })
    }

    onFormContentChange = (event) => {
        this.setState({ formContent: event.target.value })
    }

    submitContactForm = async (event) => {
        event.preventDefault()

        const recipientMail = "toddorjim@msn.com";
        const { name, mail, formContent, tel } = this.state

        const res = await sendContactMail(recipientMail, name, mail, formContent, tel)
        if (res.status < 300) {
            this.setState({
                formButtonDisabled: true,
                formButtonText: "Thanks for your message",
                name: "",
                mail: "",
                tel: "",
                formContent: ""
            })

        } else {
            this.setState({ formButtonText: "Please fill out all fields." })
        }
//[7]
    }
}

export default Contact