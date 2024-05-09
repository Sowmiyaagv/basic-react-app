import React, { useState } from 'react';
import './App.css'; // Import your CSS file for styling

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
    setError('');
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setSubmitted(true);
      setError('');
    } else {
      setError('Please enter a valid email address.');
    }
  };

  const validateEmail = (email) => {
    // Basic email validation
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <div className="App">
      <div className="left-corner">
        <h3>Brunel</h3>
      </div>
      <div className="registration-form">
        <div className="header">
          <h2 style={{ color: 'green' }}>Registration Form</h2>
        </div>
        <div className="success-journey">
        <p>Start your success journey here!</p>
      </div>
        {!submitted && (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Enter your name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Enter your email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
                className={error ? 'error' : ''}
              />
              {error && <div className="error">{error}</div>}
            </div>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        )}
        {submitted && (
          <div className="submitted-message">
            <p>Thank you for submitting!</p>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
          </div>
        )}
      </div>
      
    </div>
  );
}

export default App;