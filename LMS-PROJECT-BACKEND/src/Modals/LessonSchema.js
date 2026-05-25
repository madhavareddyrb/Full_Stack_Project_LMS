const mongoose = require("mongoose");

const LessonSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },

    youtubeUrl: {
      type: String,
      required: true,
    },

    duration: {
      type: Number, // in minutes
    },

    isPreviewFree: {
      type: Boolean,
      default: false,
    },

    section: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Section",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Lesson", LessonSchema);