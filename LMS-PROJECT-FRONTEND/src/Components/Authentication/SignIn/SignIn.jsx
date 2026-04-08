import React, { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");

  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });
      setMessage("Login SuccessFull");
      console.log(response.data);
      navigate("/userdashboard");
    } catch (error) {
      setMessage(
        error.response?.data?.message || "An error occurred during login.",
      );
    }
  };

  return (
    <>
      <h2>Sign In</h2>
      {message && <p className="text-red-700"> {message}</p>}
      <form action="" onSubmit={handleLogin}>
        <label htmlFor="">Email: </label>
        <input
          type="email"
          name="Email"
          placeholder="Enter Your Email "
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="">Password: </label>
        <label htmlFor="">Email: </label>
        <input
          type="password"
          name="Password"
          placeholder="Enter Your Password "
          onChange={(e) => setPassowrd(e.target.value)}
          required
        />
        <button type="submit">SignIN</button>
      </form>
    </>
  );
}
