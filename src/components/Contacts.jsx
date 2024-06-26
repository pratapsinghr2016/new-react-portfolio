import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "react-vertical-timeline-component/style.min.css";

function ContactsSection({ resumeExperience, resumeBasicInfo }) {
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Email:", email);
    console.log("Body:", body);
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
        <Row className="justify-content-center" style={{ marginTop: -10 }}>
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
