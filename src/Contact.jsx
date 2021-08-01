import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import Button from '@material-ui/core/Button';


const Contact = () => {
    const style = {
        background: 'linear-gradient(45deg, #4e9eff 20%, #4e9eff 90%)',
        borderRadius: 3,
        border: 0,
        fontSize: '1.1em',
        fontWeight: 500,
        letterSpacing: '2px',
        width: '100%',
        color: 'white',
        height: 36,
        padding: '20px',
        marginTop: '10px',
        boxShadow: '0 2px 4px 1px rgba(33, 203, 243, .3)',
    };

    const history = useHistory();

    const [user, setUser] = useState({
        name: "", email: "", message: ""
    });

    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value });
    }


    const PostData = async (e) => {
        e.preventDefault();

        const { name, email, message } = user;

        const res = await fetch('/contactus', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, message
            })
        });

        const data = await res.json();

        if (res.status === 422 || !data) {
            window.alert("Invalid Message");
        } else {
            window.alert("Message Send");

            history.push("#banner");
        }

    }


    return (
        <section className="contact" id="contact">
            <div className="title">
                <h2 className="section-title">Contact Me</h2>
       </div>
            <div className="content">
                <div className="row">
                    <div className="card">
                        <div className="contact-icon">
                            <FaMapMarkerAlt />
                        </div>
                        <div className="info">
                            <h3>Address</h3>
                            <span>Jindal Nagar, Angul, Odisha</span>
                        </div>
                    </div>
                    <div className="card">
                        <div className="contact-icon">
                            <FaPhone />
                        </div>
                        <div className="info">
                            <h3>Phone</h3>
                            <span>+91 6266218659</span>
                        </div>
                    </div>
                    <div className="card">
                        <div className="contact-icon">
                            <FaEnvelope />
                        </div>
                        <div className="info">
                            <h3>Email Address</h3>
                            <span>puneetsharma0369@gmail.com</span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="contact-form">
                        <h3>Send Message</h3>
                        <form method="post">
                            <div className="input-box">
                                <input type="text" name="name"
                                    value={user.name}
                                    onChange={handleInputs}
                                    placeholder="Name" />
                            </div>
                            <div className="input-box">
                                <input type="text" name="email"
                                    value={user.email}
                                    onChange={handleInputs}
                                    placeholder="Email" />
                            </div>
                            <div className="input-box">
                                <textarea name="message" cols="80" rows="8"
                                    value={user.message}
                                    onChange={handleInputs}
                                    placeholder="Message"></textarea>
                            </div>
                            
                            <Button type="submit" className="send-btn" style={style} onClick={PostData} value="Send"  >Send</Button>

                        </form>
                    </div>
                </div>
            </div>

        </section>
    )
};


export default Contact