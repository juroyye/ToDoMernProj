const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const TodoModel = require('./backend/Models/Todo')

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://juroyye:element222@cluster0.sc93osl.mongodb.net/')

app.post('/add', (req, res) => {
    const task = req.body.task;
    TodoModel.create({
        task: task
    }).then(result => res.json(result))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("Listening on port 3001!")
})