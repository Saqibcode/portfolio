import React, {useState} from 'react'
import emailjs from 'emailjs-com'
import {useForm} from "react-hook-form";


import "./Contacts.css";


const Contacts =() => {

    const [successMessage, setSuccessMessage] = useState("");
    const { register, handleSubmit, errors } = useForm();

    const serviceID = "service_ID";
    const templateID = "template_ID";
    const userID = "user_hzv6Ab46CNokxTbaFagSX";

    const onSubmit = (data, r) =>{
        sendEmail(
            serviceID,
            templateID,
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                description: data.description
            },
            userID
        )
        r.target.reset();
    }


    const sendEmail= (serviceID, templateID, variables, userID)=> {
        emailjs.send(serviceID, templateID, variables, userID)
          .then(() => {
            setSuccessMessage("Form sent successfully!");
          }).catch(err => console.error(`Something went wrong ${err}`));
      }

    return (
        <div id="contacts" className="contacts">
            <div className="text-center">
            <h1>Contact me</h1>
            <p>Want to discuss any projects?
            </p>
            <span className="success-message">
                            {successMessage}
                        </span>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        {/* Name input */}
                        <div className="text-center">
                        <input id="name" type="text" className="form-control" placeholder="Name" name="name"
                        ref={
                            register({
                                required:"Please enter your name",
                                maxLength:{
                                 value: 20,
                                 message: "Please enter a name with fewer than 20 characters"
                                }
                            })
                        }
                        />
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.name && errors.name.message}
                        </span>
                        {/* Phone input */}
                        <div className="text-center">
                        <input id="phone" type="text" className="form-control" placeholder="Phone Number" name="phone"
                        ref={
                            register({
                                required:"Please enter your Phone number"
                            })
                        }
                        />
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.phone && errors.phone.message}
                        </span>
                        {/* Email input */}
                        <div className="text-center">
                        <input id="email" type="email" className="form-control" placeholder="Email" name="email"
                         ref={
                            register({
                                required:"Please enter your email address",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message:"invalid email"
                                }
                            })
                        }
                        />
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.email && errors.email.message}
                        </span>
                        {/* Subject input */}
                        <div className="text-center">
                        <input id="subject" type="text" className="form-control" placeholder="Subject" name="subject"
                        ref={
                            register({
                                required:"OOPS, you forgot to enter the Subject :("
                            })
                        }
                        />
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.subject && errors.subject.message}
                        </span>
                    </div>
                    <div className="col-md-6 col-xs-12">
                        {/* Description input */}
                        <div className="text-center">
                        <textarea 
                        id="description"
                        type="text" 
                        className="form-control" 
                        placeholder="Please enter your query below" 
                        name="description"
                        ref={
                            register({
                                required:"Please describe briefly your query"
                            })
                        }
                        ></textarea>
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.description && errors.description.message}
                        </span>
                        <button className="btn-main-offer contact-btn" type="submit">contact me</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    )
}

export default Contacts
