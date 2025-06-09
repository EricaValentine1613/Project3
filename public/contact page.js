import React, { useState } from "react";

function ContactPage() {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        comments: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission here (e.g., send to backend)
        alert("Form submitted:\n" + JSON.stringify(form, null, 2));
    };

    return (
        <div style={{ fontFamily: "Arial, sans-serif", margin: 40 }}>
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: "auto" }}>
                <label htmlFor="firstName" style={{ display: "block", marginTop: 15 }}>
                    First Name
                </label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={form.firstName}
                    onChange={handleChange}
                    style={{ width: "100%", padding: 8, marginTop: 5, boxSizing: "border-box" }}
                />

                <label htmlFor="lastName" style={{ display: "block", marginTop: 15 }}>
                    Last Name
                </label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={form.lastName}
                    onChange={handleChange}
                    style={{ width: "100%", padding: 8, marginTop: 5, boxSizing: "border-box" }}
                />

                <label htmlFor="email" style={{ display: "block", marginTop: 15 }}>
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    style={{ width: "100%", padding: 8, marginTop: 5, boxSizing: "border-box" }}
                />

                <label htmlFor="comments" style={{ display: "block", marginTop: 15 }}>
                    Additional Comments
                </label>
                <textarea
                    id="comments"
                    name="comments"
                    rows={4}
                    value={form.comments}
                    onChange={handleChange}
                    style={{ width: "100%", padding: 8, marginTop: 5, boxSizing: "border-box" }}
                />

                <button type="submit" style={{ marginTop: 20, padding: "10px 20px" }}>
                    Submit
                </button>
            </form>
        </div>
    );
}

export default ContactPage;