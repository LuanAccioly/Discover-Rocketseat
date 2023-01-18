const express = require('express')
const app = express()

app.listen('3000')

app.route('/').get((req, res) => res.send("hello"))

app.route('/').post( (req, res) => console.log(req.body))