import emailjs from "emailjs-com";
import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "react-vertical-timeline-component/style.min.css";
import github from "./assets/github.svg";
import hashnode from "./assets/hashnode.svg";
import linkedIn from "./assets/linkedin.svg";
import whatsapp from "./assets/whatsapp.svg";

const skillStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "10px",
  padding: "20px",
  borderRadius: "10px",
  backgroundColor: "#444",
  color: "#ffffff",
  fontSize: "20px",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  width: "80px",
  height: "80px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
};

const contactDetails = [
  { url: "https://linkedin.com", img: linkedIn },
  { url: "https://github.com", img: github },
  { url: "https://wa.me/yourwhatsappnumber", img: whatsapp },
  { url: "", img: hashnode },
];

function ContactsSection({ resumeExperience, resumeBasicInfo }) {
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log("Email:", email);
      console.log("Body:", body);
      const response = await emailjs.send(
        "service_y8jsc8q", // Replace with your service ID
        "template_1eq5sjb", // Replace with your template ID
        {
          from_email: email,
          message: body,
        },
        "QhFd89M-SHhCm7ibF" // Replace with your user ID
      );
      console.log("Email sent successfully:", response.status, response.text);
      setEmail("");
      setBody("");
      alert("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Something went wrong, please contact on other modes");
    }
  };

  return (
    <section id="resume" className="pb-5">
      <Container>
        <Row className="justify-content-center">
          <Col className="text-center">
            <h1
              className="section-title"
              style={{ color: "black", margin: "2rem 0" }}
            >
              Contacts
            </h1>
          </Col>
        </Row>
        <Row className="justify-content-center mb-4" style={{ marginTop: -10 }}>
          <Col className="text-center">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {contactDetails.map((contact, index) => (
                <div style={skillStyle} key={index}>
                  <a
                    href={contact.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={contact.img}
                      alt="LinkedIn"
                      width={40}
                      height={40}
                    />
                  </a>
                </div>
              ))}
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center" style={{ marginTop: 40 }}>
          <Col md={8}>
            <Form
              onSubmit={handleSubmit}
              style={{
                padding: "2rem",
                backgroundColor: "#fff",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "10px",
                width: "100%",
                height: "100%",
              }}
            >
              <Form.Group controlId="formEmail">
                <Form.Label style={{ fontSize: "1.45rem", fontWeight: 600 }}>
                  Email address
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="recruiter@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    borderRadius: "4px",
                    borderColor: "#ced4da",
                    padding: "10px",
                    fontSize: "16px",
                    boxShadow: "inset 0 1px 3px rgba(0,0,0,.12)",
                  }}
                />
              </Form.Group>
              <Form.Group controlId="formBody" className="mt-4">
                <Form.Label style={{ fontSize: "1.45rem", fontWeight: 600 }}>
                  Body
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Enter your message"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  style={{
                    borderRadius: "4px",
                    borderColor: "#ced4da",
                    padding: "10px",
                    fontSize: "16px",
                    boxShadow: "inset 0 1px 3px rgba(0,0,0,.12)",
                  }}
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="mt-4"
                style={{
                  width: "100%",
                  padding: "10px",
                  fontSize: "18px",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  backgroundColor: "#444444",
                }}
              >
                Send
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ContactsSection;
