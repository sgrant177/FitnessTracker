const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({

  day:
  {
    type: Date,
    default: Date.now,
  },

  exercises: [
    {
      type: {
        type: String,
        required: true
      },

      name: {
        type: String,
        required: true
      },

      duration: {
        type: Number,
        required: true
      },

      distance: {
        type: Number
      },

      weight: {
        type: Number
      },

      reps: {
        type: Number
      },

      sets: {
        type: Number
      }
    },
  ]

}, { toJSON: { virtuals: true } });

WorkoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration
  }, 0);
})

// source:
// https://mongoosejs.com/docs/tutorials/virtuals.html#virtuals-in-json

const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;