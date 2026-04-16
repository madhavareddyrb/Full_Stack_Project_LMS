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

  return (
    <>
      <Navbar />

      <h2>User Profile Coming Soon</h2>
    </>
  );
}
