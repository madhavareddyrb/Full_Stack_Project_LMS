const Course = require("../Modals/Course");
const Section = require("../Modals/SectionSchema");
const Lesson = require("../Modals/LessonSchema");

// course creation

const createCourse = async (req, res) => {
  try {
    const { title, description, price } = req.body;

    const course = await Course.create({
      title,
      description,
      price,
    });

    res.status(201).json({
      success: true,
      message: "Course created",
      course,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
// createsection

const createSection = async (req, res) => {
  try {
    const { title, courseId } = req.body;

    const section = await Section.create({
      title,
      course: courseId,
    });

    await Course.findByIdAndUpdate(courseId, {
      $push: {
        sections: section._id,
      },
    });

    console.log(courseId,
      "Course Id"
    )
    console.log(section._id, "Section Id");


    res.status(201).json({
      success: true,
      message: "Section created",
      section,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

// create lesson

const createLesson = async (req, res) => {
  try {
    const { title, description, youtubeUrl, duration, sectionId } = req.body;

    const lesson = await Lesson.create({
      title,
      description,
      youtubeUrl,
      duration,
      section: sectionId,
    });

    await Section.findByIdAndUpdate(sectionId, {
      $push: {
        lessons: lesson._id,
      },
    });

    res.status(201).json({
      success: true,
      message: "Lesson created",
      lesson,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

module.exports = { createCourse, createSection, createLesson };
