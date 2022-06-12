const express = require('express')
const nunjucks = require('nunjucks')
const fs = require('fs-extra')
const path = require('path')
const app = express()
const port = 3000
const a = require('path').basename(__dirname);
const data = require("./src/data/_data.json");
const util = require('util')
const readdir = util.promisify(fs.readdir)


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

// for all the files in pages (and their subfolders) TODO: make this shit recursive
readdir('src/pages', { withFileTypes: true })
  .then(files => {
    for (const dirent of files) {
      if (!dirent.isDirectory()) {
        const file = dirent.name
        let route = '/'+path.parse(file).name;
        if (route == '/index' ) {
          route = '/'
        }
        const privatedata = data[path.parse(file).name];
        const template = 'pages/'+file;
        console.log('Serving page '+template+' on route '+route);
        app.get(route, function (req, res) {
          res.render(template, privatedata); 
        });
      } else {
        readdir('src/pages/'+dirent.name, { withFileTypes: true })
        .then(files => {
          const dir=dirent.name
          for (const dirent of files) {
            if (!dirent.isDirectory()) {
              const file = dirent.name
              let route = '/'+dir+'/'+path.parse(file).name;
              if (route == '/index' ) {
                route = '/'
              }
              const privatedata = data[dir][path.parse(file).name];
              const template = 'pages/'+dir+'/'+file;
              console.log('Serving page '+template+' on route '+route);
              app.get(route, function (req, res) {
                res.render(template, privatedata); 
              });
            } else {
              readdir('src/pages'+dirent.name, { withFileTypes: true })
      
            }
          }
        })
      }
    }
  })


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})