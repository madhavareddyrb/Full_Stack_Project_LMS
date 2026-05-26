import React, { useState } from "react";
import axios from "axios";

export default function CreateLesson() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    youtubeUrl: "",
    duration: "",
    sectionId: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/lesson/create",
        formData,
      );

      console.log(response.data);

      alert("Lesson Created Successfully");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h2>Create Lesson</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Lesson Title"
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Lesson Description"
          onChange={handleChange}
        />

        <input
          type="text"
          name="youtubeUrl"
          placeholder="YouTube URL"
          onChange={handleChange}
        />

        <input
          type="number"
          name="duration"
          placeholder="Duration"
          onChange={handleChange}
        />

        <input
          type="text"
          name="sectionId"
          placeholder="Section ID"
          onChange={handleChange}
        />

        <button type="submit">Create Lesson</button>
      </form>
    </div>
  );
};
