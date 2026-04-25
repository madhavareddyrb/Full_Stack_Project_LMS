const CourseSchema = new mongoose.Schema(
  {
    instructor: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

    type: {
      type: String,
      enum: ["course", "practice_test"],
      required: true,
    },

    title: { type: String, required: true },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },

    status: {
      type: String,
      enum: ["draft", "in_progress", "published"],
      default: "draft",
    },

    learningObjectives: [String],
    prerequisites: {
      type: String,
      required: true,
    },
    targetAudience: {
      type: String,
      required: true,
    },

    sections: [SectionSchema],
  },
  { timestamps: true },
);
