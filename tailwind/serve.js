
const express = require('express')
const nunjucks = require('nunjucks')
const app = express()
const port = 3000
const a = require('path').basename(__dirname);


nunjucks.configure('src', {
    autoescape: true,
    express: app
});
app.use(express.static('public'))
app.get('/', function(req, res) {
    res.render('index.html');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })