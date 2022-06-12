const express = require('express')
const nunjucks = require('nunjucks')
const path = require('path')
const app = express()
const port = 3000
const a = require('path').basename(__dirname);
const data = require("./src/data/_data.json");



var livereload = require("livereload");
var connectLiveReload = require("connect-livereload");

const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

nunjucks.configure('src', {
    autoescape: true,
    express: app
});
app.use(connectLiveReload());
app.use(express.static('./.temp/public'))
app.use(express.static('public'))
app.get('/', function (req, res) {

    res.render('pages/index.html', data['index']); 
});
app.get('/about', function (req, res) {
    res.render('pages/about.html',data['about']); 
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})