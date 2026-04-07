import React, { useState } from "react";
import axios from "axios"; // 1. Import Axios

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

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 2. The API Call
      const response = await axios.post(
        "http://localhost:3000/signup",
        formData,
      );

      // 3. Handle Success
      setMessage("User Registered Successfully! ✅");
      console.log("Backend Response:", response.data);
    } catch (err) {
      // 4. Handle Errors (like Email already exists)
      const errorMsg = err.response?.data?.message || "Registration Failed ❌";
      setMessage(errorMsg);
      console.error("Error details:", err);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>LMS Signup</h2>
      {message && <p>{message}</p>}

      <form onSubmit={handleSubmit}>
        {/* Use the same input fields from before */}
        <input
          type="text"
          name="userName"
          placeholder="Username"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="Email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="Password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="ConfirmPassword"
          placeholder="Confirm Password"
          onChange={handleChange}
          required
        />

        <select name="Gender" onChange={handleChange} required>
          <option value="">Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <input
          type="date"
          name="DateOfBirth"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="Nationality"
          placeholder="Nationality"
          onChange={handleChange}
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default SignUp;
