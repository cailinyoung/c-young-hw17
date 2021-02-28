// router
const router = require('express').Router();
const Workout = require("../models/workout.js");

// get 
router.get("/api/workouts", function (req, res) {
    Workout.find({})
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
})

// post
router.post("/api/workouts", function ({ body }, res) {
    Workout.create(body)
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
})

// put
router.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(
        params.id,
        { $push: { exercises: body } },
        { new: true, runValidators: true })
        .then(data => res.json(data))
        .catch(err => {
            console.log("err", err)
            res.json(err)
        })
});

router.get("/api/workouts/range", function (req, res) {
    Workout.find()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
})

// export
module.exports = router

