// router
const router = require('express').Router();
const Workout = require('../models/workout');

// get 
router.get("/api/workouts", function(req,res){
    Workout.find()
        .then(data=>{
            res.json(data)
        })
        .catch(err=>{
            res.json(err)
        })
})

// post
router.post("/api/workouts", function(req,res){
Workout.create({})
        .then(data=>{
            res.json(data)
        })
        .catch(err=>{
            res.json(err)
        })
})

// put
router.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(
        params.id,
        { $push: { exercise: body } },
        { new: true, runValidators: true })
        .then(data => res.json(data))
        .catch(err => {
            console.log("err", err)
            res.json(err)
        })
});

// export
module.exports = router