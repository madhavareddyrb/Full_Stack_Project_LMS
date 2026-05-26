const Course = require("../models/LessonModel");
const Section = require("../models/SectionModel");

exports.createSection = async (req, res) => {
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

    res.status(201).json({
      success: true,
      message: "Section Created",
      section,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

