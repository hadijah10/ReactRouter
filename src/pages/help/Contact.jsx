import React from "react";
export default function Contact(){
    return (
        <>
        <div className="contact">
        <h3>Contact Us</h3>
        <form action="POST">
            <label htmlFor=""><span>Your email</span>
            <input type="email" name="email" placeholder="Email?"  required/>
            </label>
           <label htmlFor="">
            <span>Your message</span>
           <textarea name="message" id="" cols="30" rows="10"></textarea>
           </label>
        <button>Submit</button>
        </form>
        </div>
        </>
    );
}