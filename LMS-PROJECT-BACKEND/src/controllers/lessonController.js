const Lesson = require("../models/LessonModel");
const Section = require("../models/SectionModel");

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
      message: "Lesson Created",
      lesson,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

module.exports = {
  createLesson,
};
