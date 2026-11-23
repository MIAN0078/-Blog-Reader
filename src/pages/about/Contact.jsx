import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    e.target.reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Contact Us</h2>
      <input className="input" placeholder="Your name" required />
      <input className="input" type="email" placeholder="Your email" required />
      <textarea className="input" rows="4" placeholder="Message" required />
      <button className="btn" type="submit">
        Send
      </button>
      {sent && <div className="success">✅ Message bhej diya gaya (demo)</div>}
    </form>
  );
}