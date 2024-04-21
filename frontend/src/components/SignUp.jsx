import React, { useState, useEffect } from "react";
import "./SignUp.css"; // Import the CSS file for styling

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    password2: "",
  });

  const { email, first_name, last_name, password, password2 } = formData;

  const handleSignInWithGoogle = async(response) => {
    console.log(response)
  };

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: import.meta.env.VITE_CLIENT_ID,
      callback: handleSignInWithGoogle,
    });
    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme:"outline", size:"large", text:"continue_with", shape:"circle", width:"280"}
    )
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      email: "",
      first_name: "",
      last_name: "",
      password: "",
      password2: "",
    });
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="first_name">First Name:</label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            value={first_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="last_name">Last Name:</label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            value={last_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password2">Confirm Password:</label>
          <input
            type="password"
            id="password2"
            name="password2"
            value={password2}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="signup-button">
          Sign Up
        </button>
      </form>

      <div className="'googleContainer" id='signInDiv'>

      </div>
    </div>
  );
};

export default SignUp;
