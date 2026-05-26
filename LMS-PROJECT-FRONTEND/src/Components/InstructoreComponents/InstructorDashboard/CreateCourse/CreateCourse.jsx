import React, { useState } from "react";
import axios from "axios";

const CreateCourse = () => {
  const [step, setStep] = useState(1);

  const [courseId, setCourseId] = useState("");
  const [sectionId, setSectionId] = useState("");

  // course form
  const [courseData, setCourseData] = useState({
    title: "",
    description: "",
    price: "",
    thumbnail: "",
  }); // section form
  const [sectionData, setSectionData] = useState({
    title: "",
  });

  // lesson form
  const [lessonData, setLessonData] = useState({
    title: "",
    description: "",
    youtubeUrl: "",
    duration: "",
  });

  // course submit
  const handleCourseSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/course/create",
        courseData,
      );

      setCourseId(response.data.course._id);

      alert("Course Created Successfully");

      setStep(2);
    } catch (error) {
      console.log(error);
    }
  }; // section submit
  const handleSectionSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/section/create",
        {
          title: sectionData.title,
          courseId,
        },
      );
      setSectionId(response.data.section._id);

      alert("Section Created Successfully");

      setStep(3);
    } catch (error) {
      console.log(error);
    }
  };
  // lesson submit
  const handleLessonSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3000/lesson/create", {
        ...lessonData,
        sectionId,
      });

      alert("Lesson Created Successfully");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      style={{
        width: "500px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
      }}
    >
      {/* STEP 1 */}
      {step === 1 && (
        <div>
          <h2>Create Course</h2>

          <form onSubmit={handleCourseSubmit}>
            <input
              type="text"
              placeholder="Course Title"
              value={courseData.title}
              onChange={(e) =>
                setCourseData({
                  ...courseData,
                  title: e.target.value,
                })
              }
              style={{ width: "100%", marginBottom: "10px", padding: "10px" }}
            />
            <textarea
              placeholder="Description"
              value={courseData.description}
              onChange={(e) =>
                setCourseData({
                  ...courseData,
                  description: e.target.value,
                })
              }
              style={{ width: "100%", marginBottom: "10px", padding: "10px" }}
            />
            <input
              type="number"
              placeholder="Price"
              value={courseData.price}
              onChange={(e) =>
                setCourseData({
                  ...courseData,
                  price: e.target.value,
                })
              }
              style={{ width: "100%", marginBottom: "10px", padding: "10px" }}
            />
            <input
              type="text"
              placeholder="Thumbnail URL"
              value={courseData.thumbnail}
              onChange={(e) =>
                setCourseData({
                  ...courseData,
                  thumbnail: e.target.value,
                })
              }
              style={{ width: "100%", marginBottom: "10px", padding: "10px" }}
            />

            <button type="submit">Next → Create Section</button>
          </form>
        </div>
      )}{" "}
      {/* STEP 2 */}
      {step === 2 && (
        <div>
          <h2>Create Section</h2>

          <form onSubmit={handleSectionSubmit}>
            <input
              type="text"
              placeholder="Section Title"
              value={sectionData.title}
              onChange={(e) =>
                setSectionData({
                  title: e.target.value,
                })
              }
              style={{ width: "100%", marginBottom: "10px", padding: "10px" }}
            />

            <button type="submit">Next → Create Lesson</button>
          </form>
        </div>
      )}
      {/* STEP 3 */}
      {step === 3 && (
        <div>
          <h2>Create Lesson</h2>

          <form onSubmit={handleLessonSubmit}>
            <input
              type="text"
              placeholder="Lesson Title"
              value={lessonData.title}
              onChange={(e) =>
                setLessonData({
                  ...lessonData,
                  title: e.target.value,
                })
              }
              style={{ width: "100%", marginBottom: "10px", padding: "10px" }}
            />

            <textarea
              placeholder="Lesson Description"
              value={lessonData.description}
              onChange={(e) =>
                setLessonData({
                  ...lessonData,
                  description: e.target.value,
                })
              }
              style={{ width: "100%", marginBottom: "10px", padding: "10px" }}
            />

            <input
              type="text"
              placeholder="YouTube URL"
              value={lessonData.youtubeUrl}
              onChange={(e) =>
                setLessonData({
                  ...lessonData,
                  youtubeUrl: e.target.value,
                })
              }
              style={{ width: "100%", marginBottom: "10px", padding: "10px" }}
            />

            <input
              type="number"
              placeholder="Duration"
              value={lessonData.duration}
              onChange={(e) =>
                setLessonData({
                  ...lessonData,
                  duration: e.target.value,
                })
              }
              style={{ width: "100%", marginBottom: "10px", padding: "10px" }}
            />

            <button type="submit">Create Lesson</button>
          </form>
        </div>
      )}
    </div>
  );
};
export default CreateCourse;
