const db = require("../models");
require("mongoose");

module.exports = (app) => {
    app.post("/api/workouts", (req, res) => {
        db.Workout.create({}).then(data => res.json(data))
            .catch(err => {
                console.log("error", err);
                res.json(err);
            });
    });

    app.put("/api/workouts/:id", (req, res) => {
        db.Workout.findByIdAndUpdate(req.params.id,

            { $push: { exercises: req.body } },
            { new: true, runValidators: true })

            .then(data => res.json(data))
            .catch(err => {

                console.log("error", err);
                res.json(err);

            });
    });

    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}).then(data => res.json(data))

            .catch(err => {

                console.log("error", err);
                res.json(err);

            });

    });

    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({}).limit(7).then(data => res.json(data))

            .catch(err => {

                console.log("error", err);
                res.json(err);

            });

    });

    app.get("*", (req, res) => {
        res.redirect("/");
    });

};