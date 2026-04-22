import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "@/Components/HomePageComponents/Navbar/Navbar";
import api from "@/jwtVerify";
import { NavLink } from "react-router";
export default function InstructorForm() {
  const [step, setStep] = useState(1);
  const [selectOption, setSelectOption] = useState();
  const handleFinish = async () => {
    try {
      const token = localStorage.getItem("access_token");
      const response = await api.get(`/instructor/onboarding-complete`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setStep(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleFinish;
  }, []);

  function FormExample() {
    const [selectOption, setSelectOption] = useState("");

    const quesionOptios = [
      {
        question: "How Much Experience Do you have in Teaching",
        options: [
          "In person, Proffisional",
          "In any Institute",
          "no Experience",
        ],
      },
    ];

    return (
      <form>
        {quesionOptios.map((option, index) => (
          <div key={index}>
            <h2>{option.question}</h2>

            {option.options.map((opt, index) => {
              return (
                <>
                  <div key={index}>
                    <input
                      type="radio"
                      id={opt}
                      name="name"
                      value={opt}
                      checked={selectOption === opt}
                      onChange={(e) => setSelectOption(e.target.value)}
                    />
                    <label htmlFor={opt}>{opt}</label>
                  </div>
                </>
              );
            })}
          </div>
        ))}

        <p>Selected: {selectOption}</p>
      </form>
    );
  }

  return (
    <>
      <Navbar />

      <NavLink to="/instructor/dashboard">
        <button onClick={handleFinish}>SubmIt finla form</button>
      </NavLink>

      {FormExample()}
    </>
  );
}
