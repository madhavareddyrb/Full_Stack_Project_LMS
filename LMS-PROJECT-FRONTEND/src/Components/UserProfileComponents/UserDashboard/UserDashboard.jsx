
import Navbar from "@/Components/HomePageComponents/Navbar/Navbar";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function Orders() {
  const [ordersData, setOrdersData] = useState([]);
  

  async function getOrders() {
    try {
      const token = localStorage.getItem("access_token");

      const response = await axios.get("http://localhost:3000/userprofile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("FULL RESPONSE:", response);
      console.log("DATA:", response.data);

      setOrdersData(response.data.results);
    } catch (error) {
      console.log("ERROR:", error.response?.data || error.message);
    }
  }

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div>
      <Navbar />
      Orders
      {ordersData &&
        ordersData.map((ele) => {
          return (
            <>
              Hello orders
              {ele.userName}
              {/* {ele.fullname} */}
              {ele.email}
            </>
          );
        })}
    </div>
  );
}
