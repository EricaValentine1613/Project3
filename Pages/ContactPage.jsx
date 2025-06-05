import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const ContactPage = () => {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        comments: '',
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        alert('Form submitted!');
    };

    return (
        <Container className="mt-5" style={{ maxWidth: '500px' }}>
            <h2>Contact Us</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="firstName" className="mb-3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        placeholder="Enter your first name"
                        required
                    />
                </Form.Group>
                <Form.Group controlId="lastName" className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        placeholder="Enter your last name"
                        required
                    />
                </Form.Group>
                <Form.Group controlId="email" className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                    />
                </Form.Group>
                <Form.Group controlId="comments" className="mb-3">
                    <Form.Label>Comments</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="comments"
                        value={form.comments}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Enter your comments"
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
};

export default ContactPage;