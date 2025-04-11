import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { TextField, Button, Grid } from "@mui/material";
import "../css/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS Service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" }); // Reset form
        },
        (err) => {
          console.log("FAILED...", err);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <section className="contact-container">
      <h2 className="contact-title">Get in Touch</h2>
      <Grid item xs={12} md={6}>
        <form className="contact-form" onSubmit={handleSubmit}>
          <TextField  label="Name" name="name" value={formData.name} onChange={handleChange} required className="input-field" />
          <TextField  label="Email" name="email" value={formData.email} onChange={handleChange} required className="input-field" />
          <TextField  label="Message" name="message" multiline rows={4} value={formData.message} onChange={handleChange} required className="input-field" />
          <Button variant="contained" type="submit" className="submit-btn">Send Message</Button>
        </form>
      </Grid>
    </section>
  );
};

export default Contact;
