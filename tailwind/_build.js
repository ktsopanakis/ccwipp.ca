const util = require('util')
const nunjucks = require('nunjucks')
const fs = require('fs')
const path = require('path')
const readdir = util.promisify(fs.readdir)


var dir = './build';

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
            const content = nunjucks.render('index.html', {
                foo: 'bar'
            });

            fs.writeFile('./build/index.html', content, err => {
                if (err) {
                    console.error(err);
                }
                // file written successfully
            });
        }
    )
    .catch(err => {
        console.log(err)
    })