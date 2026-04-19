import { useState } from "react";

export default function TeacherForm() {
  const [step, setStep] = useState(1);
  const handleFinish = async () => {
    try {
      await axios.post(
        "http://localhost:3000/api/instructor/onboarding-complete",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        },
      );

      navigate("/instructor/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Form1</h1>
      <h3>Form 2</h3>
      <h5>form 3</h5>
    </>
  );
}
