import React, { useRef } from "react"
import { Link } from "react-router-dom"
import AnimatedPage from "../components/AnimatedPage"
import emailjs from "@emailjs/browser"
import { AiFillGithub } from "react-icons/ai"
import { BsFacebook, BsGithub, BsInstagram } from "react-icons/bs"

export default function Contacts() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_uj62t8j', 'template_e1rjz18', form.current, '0r5OJ-xS4PhIbXPVI')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <AnimatedPage>

            <div className="Contacts-container">
                <form ref={form} onSubmit={sendEmail} className="forminput">
                    <h2 className="h2-contact">Looking forward to hearing from you!</h2>
                    <label style={{ height: 30, margin: 0, padding: 0 }}>Name</label>
                    <input type="text" name="user_name" className="nameinput" />
                    <label style={{ height: 30 }}>Email</label>
                    <input type="email" name="user_email" style={{ height: 30, borderRadius: 5, border: 'none' }} />
                    <label style={{ height: 30 }}>Message</label>
                    <textarea name="message" style={{ height: 60, marginBottom: 30, borderRadius: 5, border: 'none' }} />
                    <input type="submit" value="Send" style={{ height: 50, fontSize: 20, borderRadius: 5, border: 'none', cursor: 'pointer' }} />
                </form>
                <div className="contactinfo">
                    <h2 className="email-text">e-mail: glumacvlada@gmail.com</h2>
                    <div className="iconinfo">
                        <a href="https://github.com/VladimirGlumac" style={{ width: 50, height: 50, fontSize: 50, padding: 10 }}><BsGithub style={{ width: 50, height: 50, color: 'white' }} className="giticon" /></a>
                        <a href="https://www.facebook.com/vladimir.glumac.50/" style={{ width: 50, height: 50, fontSize: 50, padding: 10 }} ><BsFacebook style={{ width: 50, height: 50, color: 'white' }} className="giticon" /></a>
                        <a href="https://www.instagram.com/vladimirglumac/" style={{ width: 50, height: 50, fontSize: 50, padding: 10 }}><BsInstagram style={{ width: 50, height: 50, color: 'white' }} className="giticon" /></a>
                    </div>
                </div>

            </div>
        </AnimatedPage>
    )
};