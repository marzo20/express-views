// required packages
const express = require('express')
// const ejs = require('ejs')
const ejsLayouts = require('express-ejs-layouts')
// set up express app
const app = express()
const PORT = 3333
// tell express to use ejs to render html from templates
app.set('view engine', 'ejs')

// middlewres (code  that runs every time a request happens)
// app.use()
// hey express --my assets folder is called Public
app.use(express.static('Public'))
app.use(ejsLayouts) // only needed if you are using ejs layouts

// res.send --triee]s to figure out what to send (not specific)
// res.json -- send json data
// res.cookie -- send a browseer cookie
// res.render -- render an html template

// res.sendFile -- send an html document
// routes

app.get('/', (req, res) => {
    // we have to tell express what directory to get the file from
    // the path will change based on the 'environment
    // dunder dirname
    // res.render('template file', {dataobject})
    res.render('index.ejs', {name: 'Sterling Archer', age: 35})// assumes we are in the 'views'folder
})
    
app.get('/about', (req, res) => {
    const myFavorites = ['pizza', 'tacos', 'kbbq', 'sushi']
    res.render('about.ejs', {myFavorites})
})
app.get('/blog', (req, res) => {
    // res.sendFile(__dirname + '/view/blog.html')
    res.render('blog.ejs')
})

// listen on a port
app.listen(PORT, () => {
    console.log(`I can hear port ${3333}`)
})