import { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    // Clear the form
    setName("");
    setMessage("");
  };

  return (
    <section
      id="contact"
      style={{padding: "40px",textAlign: "center",}}
    >
      <h2>Contact Me</h2>

      <form
        onSubmit={handleSubmit}
        style={{width: "350px",margin: "20px auto",display: "flex",flexDirection: "column",gap: "15px",}}
      >
        <input
          type="text" placeholder="Enter your name" value={name}
          onChange={(e) => setName(e.target.value)}
          style={{padding: "10px",fontSize: "16px",}}
        />

        <textarea
          placeholder="Enter your message" value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows="4"
          style={{padding: "10px",fontSize: "16px",}}
        ></textarea>

        <button
          type="submit"
          style={{padding: "10px", backgroundColor: "#007bff",color: "white",border: "none",cursor: "pointer",borderRadius: "5px",}} >
          Submit
        </button>
      </form>

      {submitted && (
        <h3 style={{ color: "green" }}>
          ✅ Thank you! Your message has been submitted.
        </h3>
      )}
    </section>
  );
}

export default ContactForm;