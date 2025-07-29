import './Contact.css';
import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        alert('Message sent!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Error sending message.');
      }
    } catch (err) {
      console.error(err);
      alert('Server error.');
    }
  };

  return (
    <section className="contact" id='contact'>
      <h2>contact me</h2>
      <form onSubmit={handleSubmit}>
        <input style={{fontFamily: 'Fira Code'}} name="name" value={formData.name} onChange={handleChange} placeholder="your name" required />
        <input style={{fontFamily: 'Fira Code'}} name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your email" required />
        <textarea style={{fontFamily: 'Fira Code'}} name="message" value={formData.message} onChange={handleChange} placeholder="message" required />
        <button type="submit">send</button>
      </form>
      <p className="email-info">
  or reach out directly at <a href="mailto:sreejabavandla@gmail.com">sreejabavandla@gmail.com</a>
</p>
    </section>
  );
}

export default Contact;
