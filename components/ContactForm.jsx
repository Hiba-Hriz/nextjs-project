"use client";

import { useState } from "react";

export default function ContactForm() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Full name: ", fullname);
    console.log("Email: ", email);
    console.log("Message: ", message);

    const res = await fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        email,
        message,
      }),
    });

    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);

    if (success) {
      setFullname("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div className="contact-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="fullname" className="label">
            Nom & Prénom<span className="required">*</span>
          </label>
          <input
            onChange={(e) => setFullname(e.target.value)}
            value={fullname}
            type="text"
            id="fullname"
            className="input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="label">
            Email<span className="required">*</span>
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            id="email"
            className="input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message" className="label">
            Message<span className="required">*</span>
          </label>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            id="message"
            className="textarea"
          ></textarea>
        </div>
        <button className="submit-btn" type="submit">
          Envoyer
        </button>
      </form>
      <div className="error-container">
        {error &&
          error.map((e, index) => (
            <div
              key={index}
              className={`message ${success ? "success" : "error"}`}
            >
              {e}
            </div>
          ))}
      </div>
    </div>
  );
}