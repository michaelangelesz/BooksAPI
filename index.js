const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()
const booksController = require('./controllers/books')

// import routes
app.use('/books', require('./controllers/books'))

app.use(express.json())

// db connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err))

const PORT = process.env.PORT

app.listen(PORT, console.log(`Server running on port ${PORT}`))