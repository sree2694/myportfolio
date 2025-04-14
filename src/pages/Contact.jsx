import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { TextField, Button, Grid, Typography, Box } from "@mui/material";
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
        "service_t7nj18m", // Your EmailJS Service ID
        "template_upp84id", // Your EmailJS Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "rp3rUqzIF6-ReghDe" // Your EmailJS Public Key
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
    <Box component="section" className="contact-container">
      <Typography variant="h4" className="contact-title" gutterBottom>
        Get in Touch
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        <Grid xs={12} md={6}>
          <Box component="form" className="contact-form" onSubmit={handleSubmit} noValidate>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              fullWidth
              margin="normal"
              className="input-field"
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              fullWidth
              margin="normal"
              className="input-field"
            />
            <TextField
              label="Message"
              name="message"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              fullWidth
              margin="normal"
              className="input-field"
            />
            <Button variant="contained" type="submit" className="submit-btn" fullWidth>
              Send Message
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
