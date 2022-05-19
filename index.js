// required packages
const express = require('express')

// set up express app
const app = express()
const PORT = 3333

// middlewres (code  that runs every time a request happens)
// app.use()
// hey express --my assets folder is called Public
app.use(express.static('Public'))

// res.send --tries to figure out what to send (not specific)
// res.json -- send json data
// res.cookie -- send a browseer cookie
// res.render -- render an html template

// res.sendFile -- send an html document
// routes

app.get('/', (req, res) => {
    // we have to tell express what directory to get the file from
    // the path will change based on the 'environment
    // dunder dirname
    res.sendFile(__dirname + '/view/index.html')
})
    
app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/view/about.html')
})
app.get('/blog', (req, res) => {
    res.sendFile(__dirname + '/view/blog.html')
})

// listen on a port
app.listen(PORT, () => {
    console.log(`I can hear port ${3333}`)
})