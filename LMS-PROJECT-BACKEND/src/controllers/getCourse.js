const Course = require("../models/Course");

exports.getSingleCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id).populate({
      path: "sections",
      populate: {
        path: "lessons",
      },
    });

    res.status(200).json({
      success: true,
      course,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
