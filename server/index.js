const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const axios = require('axios')
const testRoute = require('./routes/test')

const app = express()
app.use(cors())
app.use(bodyParser.json())

mongoose.connect('mongodb://admin:admin123@ds245018.mlab.com:45018/featurechecker')
    .then(() => console.log('DB connected'))
    .catch(e => console.log(e))

app.get('/', (req, res) => {
    res.send('test')
})

app.use('/tests', testRoute)

app.get('/random', async (req, res) => {
    try{
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
        res.send(data.title);
    } catch(e) {
        console.error(e)
    }
})

app.listen(5000, err => {
    console.log('listening on port 5000')
})