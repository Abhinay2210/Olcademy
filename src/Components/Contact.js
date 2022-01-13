import React from "react";
import { useState } from "react";
import "./contact.css";

export const Contact = () => {

  const [user, setUser] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    query: "",
  });

  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value});
  };

  const postData = async (e) => {
    e.preventDefault();

    const {name,email,subject,message,query} = user;

    if(name && email && subject && message && query)
    {
      const res = await fetch(
        "https://react-contact-form-bb561-default-rtdb.firebaseio.com/contactform.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application.json",
          },
          body: JSON.stringify({
            name,
            email,
            subject,
            message,
            query,
          }),
        }
      )
  
      if(res){
        setUser({
          name: "",
          email: "",
          subject: "",
          message: "",
          query: "",
        });
        alert("Message sent Successfully!");
  
      }

    }
    else{
      alert("All fields are Mandatory!");

    }

   
  };

  return (
    <>
      <main>
        <div className="wrapper">
          <h2>CONTACT US</h2>
          <form action="" method="POST" id="contactForm">
            <div className="form-group">
              <label for="name">Name</label>
              <input 
              placeholder="Name" 
              name="name"
              type="text" 
              value={user.name} 
              onChange={getUserData}
              />
            </div>

            <div className="form-group">
              <label for="email">Email Address</label>
              <input
                placeholder="Email"
                type="email"
                name="email"
                value={user.email}
                onChange={getUserData}
              />
            </div>

            <div className="form-group">
              <label for="subject">Subject</label>
              <input 
              placeholder="Subject" 
              type="text" 
              name="subject"
              value={user.subject}
              onChange={getUserData}
              />
            </div>

            <div className="form-group">
              <label for="message">Message</label>
              <textarea
                placeholder="Type your message here...."
                rows={5}
                id="message"
                name="message"
                value={user.message}
                onChange={getUserData}
              ></textarea>
            </div>

            <div className="form-group">
              <label for="Query">Query</label>
              <textarea
                name="query"
                id="queryContent"
                rows="3"
                placeholder="Type your queries here...."
                value={user.query}
                onChange={getUserData}
              ></textarea>
            </div>

            <div className="form-group">
              <button type="submit" className="submit" id="submit" onClick={postData}>
                Send
              </button>
            </div>

          </form>
        </div>
      </main>
    </>
  );
};

export default Contact;
