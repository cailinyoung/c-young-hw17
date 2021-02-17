// mongoose
const mongoose = require("mongoose");

// workout schema
const Schema = mongoose.Schema
const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "enter exercise type"
            },
            name: {
                type: String,
                trim: true,
                required: "enter exercise name"
            },
            duration: {
                type: Number,
                trim: true,
                required: "enter duration of exercise"
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            }
        }
    ]

},
    {
        toJSON: {
            virtuals: true
        }
    }
);
// dashboard functionality 
workoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

// export
const Workout = mongoose.model("cy-fitness-tracker", workoutSchema);
module.exports = Workout;