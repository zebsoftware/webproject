import React from "react";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import { Mail } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="py-5 bg-dark text-white">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} className="text-center">
            <Mail size={48} className="mb-4 opacity-75" />
            <h2 className="display-6 fw-bold mb-3">Stay in the Loop</h2>
            <p className="lead mb-4 opacity-75">
              Subscribe to our newsletter and be the first to know about new collections, exclusive offers, and style tips.
            </p>
            <Form className="mb-3">
              <InputGroup className="mb-3">
                <Form.Control type="email" placeholder="Enter your email" size="lg" className="border-0" style={{ backgroundColor:'rgba(255,255,255,0.1)', color:'white' }} />
                <Button variant="light" size="lg" className="px-4">Subscribe</Button>
              </InputGroup>
            </Form>
            <small className="text-muted">No spam, unsubscribe at any time.</small>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
