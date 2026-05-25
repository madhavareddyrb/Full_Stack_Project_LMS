const Course = require("../Modals/Course");

const getSingleCourse = async (req, res) => {
  try {
    const courseId = req.params.id;

    const course = await Course.findById(courseId).populate({
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

module.exports = getSingleCourse;
