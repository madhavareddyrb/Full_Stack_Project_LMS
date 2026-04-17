import Navbar from "../../HomePageComponents/Navbar/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";

export default function UserDashboard() {
  const [getUserData, setGetUserData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/userprofile");
        setGetUserData(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
  });

  async () => {
    const token = localStorage.getItem("access_token");
    console.log(token);
    if (!token) return;

    await axios.get("http://localhost:3000/user/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  return (
    <>
      <Navbar />

      <h2>User Profile Coming Soon</h2>
    </>
  );
}
