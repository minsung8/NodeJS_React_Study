const express = require('express')
const app = express()
const port = 5000

// mongodb+srv://minsung:<password>@cluster0.j3fcl.mongodb.net/<dbname>?retryWrites=true&w=majority

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://minsung:qwer1234@cluster0.j3fcl.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex:true,useFindAndModify:false
}).then(() => console.log('MongoDB Connect...')).catch(err => console.log(err))

app.get('/', (req, res) => res.send('hello world!'))

app.listen(port, () => console.log(`Example app listening on port ${port} !`))