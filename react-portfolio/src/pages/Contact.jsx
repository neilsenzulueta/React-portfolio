import { useState } from 'react';
import '../styles/contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [validationErrors, setValidationErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
    setValidationErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    else if (!isValidEmail(formData.email)) errors.email = 'Invalid email address';
    if (!formData.message.trim()) errors.message = 'Message is required';

    setValidationErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log('Form submitted:', formData);
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Contact</h2>
      <form onSubmit={handleFormSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
          />
          <p className="validation-error">{validationErrors.name}</p>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
          />
          <p className="validation-error">{validationErrors.email}</p>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
          />
          <p className="validation-error">{validationErrors.message}</p>
        </div>

        <div>
          <button
            type="submit"
            style={{
              backgroundColor: 'black',
              color: 'white',
              padding: '10px 20px',
              fontSize: '16px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'background-color 0.3s, opacity 0.3s',
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.5)')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = 'black')}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
