const express = require('express');
const Quiz = require('../models/Quiz');
const router = express.Router();

// Route 1 : Create a Quiz using POST: "/api/quiz/quizzes"
router.post('/quizzes', async (req, res) => {
    try {
        const quiz = await Quiz.create({
            question : req.body.question,
            options : req.body.options,
            rightAnswer : req.body.rightAnswer,
            startDate : req.body.startDate,
            endDate : req.body.endDate
        })

        res.json(quiz);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// Route 2 : Get active Quiz using Get: "/api/quiz/quizzes/active"
router.get('/quizzes/active', async (req,res) => {
    try {
        var query = {
            startDate : { $gte : req.body.startDate },
            endDate : { $lte : req.body.endDate }
        }
        const quizzes = await Quiz.find(query);
        res.send(quizzes);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// Route 3 : Get Quiz result by id using Get: "/api/quiz/quizzes/:id/result"
router.get('/quizzes/:id/result', async (req,res) => {
    try {
        const { id } = req.params;
        var query = {
            _id : id
        }
        const quizzes = await Quiz.findOne(query, {_id: 0, rightAnswer : 1});
        if(quizzes){
            res.send("The index value of the correct answer is: " + quizzes);
        }else{
            res.status(500).send("Internal Server Error");
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// Route 4 : Get all Quiz using Get: "/api/quiz/quizzes/all"
router.get('/quizzes/all', async (req, res) => {
    try {
        const quizzes = await Quiz.find();
        res.send(quizzes);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router