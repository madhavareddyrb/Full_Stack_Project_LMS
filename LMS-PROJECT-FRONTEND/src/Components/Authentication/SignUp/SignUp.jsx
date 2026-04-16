import React, { useState } from "react";
import axios from "axios";
import "./SignUp.css"; // import CSS file

const SignUp = () => {
  const [formData, setFormData] = useState({
    userName: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
    Gender: "",
    DateOfBirth: "",
    Nationality: "",
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.userName) newErrors.userName = "Username required";
    if (!formData.Email.includes("@")) newErrors.Email = "Invalid email";
    if (formData.Password.length < 6) newErrors.Password = "Min 6 characters";
    if (formData.Password !== formData.ConfirmPassword)
      newErrors.ConfirmPassword = "Passwords not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      await axios.post("http://localhost:3000/signup", formData);
      setMessage("Success ✅");
    } catch (err) {
      setMessage("Failed ❌");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-title">Signup</h2>

        {message && <p className="signup-message">{message}</p>}

        <form onSubmit={handleSubmit} className="signup-form">
          <label htmlFor="UserName">UserName:</label>
          <input
            className="signup-input"
            type="text"
            name="userName"
            placeholder="Username"
            onChange={handleChange}
          />
          {errors.userName && (
            <span className="signup-error">{errors.userName}</span>
          )}
          <label htmlFor="UserName">Email:</label>

          <input
            className="signup-input"
            type="email"
            name="Email"
            placeholder="Email"
            onChange={handleChange}
          />
          {errors.Email && <span className="signup-error">{errors.Email}</span>}
          <label htmlFor="UserName">Password:</label>

          <input
            className="signup-input"
            type="password"
            name="Password"
            placeholder="Password"
            onChange={handleChange}
          />
          <label htmlFor="UserName">Confirm Password:</label>

          <input
            className="signup-input"
            type="password"
            name="ConfirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
          />

          <label htmlFor="UserName">Select Gender</label>

          <select
            className="signup-select"
            name="Gender"
            onChange={handleChange}
          >
            <option value="">Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <label htmlFor="UserName">Date Of Birth:</label>

          <input
            className="signup-input"
            type="date"
            name="DateOfBirth"
            onChange={handleChange}
          />

          <input
            className="signup-input"
            type="text"
            name="Nationality"
            placeholder="Nationality"
            onChange={handleChange}
          />

          <button className="signup-button" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
