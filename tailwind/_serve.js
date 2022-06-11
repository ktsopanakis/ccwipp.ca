
const express = require('express')
const nunjucks = require('nunjucks')
const path = require('path')
const app = express()
const port = 3000
const a = require('path').basename(__dirname);


nunjucks.configure('src', {
    autoescape: true,
    express: app
});
app.get('/output.css', function(req, res) {
    res.sendFile(path.join(__dirname,"/temp/output.css"));
});

app.use(express.static('public'))
app.get('/', function(req, res) {
    res.render('index.html');
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })