const mongoose = require("mongoose");

const lessonSchema = new mongoose.Schema(
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
      type: Number,
    },

    section: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Section",
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Lesson", lessonSchema);
