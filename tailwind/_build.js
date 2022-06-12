const util = require('util')
const nunjucks = require('nunjucks')
const fs = require('fs-extra')
const path = require('path')
const readdir = util.promisify(fs.readdir)
const data = require("./src/data/_data.json");


var dir = './.dist';

console.log("Creating folder build if it does not exist");
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}

readdir(dir)
    .then(files => {
        console.log("Deleting all files in build folder");
        for (const file of files) {
            fs.unlink(path.join(dir, file), err => {
                if (err) throw err;
            });
        }
    }).then(() => {
        console.log("Creating files")
        nunjucks.configure('src', {
            autoescape: true
        });
        const index = nunjucks.render('pages/index.html', data['index']);

        fs.writeFile('./.dist/index.html', index, err => {
            if (err) {
                console.error(err);
            }
            // file written successfully
        });

        const about = nunjucks.render('pages/about.html', data['index']);

        fs.writeFile('./.dist/about.html', about, err => {
            if (err) {
                console.error(err);
            }
            // file written successfully
        });

    }).then(() => {
        console.log("Moving public files")
        fs.copySync('./public', './.dist')
    })
    .catch(err => {
        console.log(err)
    })