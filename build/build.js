'use strict';

const DIRS = ['../JavaScript/', '../'];
let fs = require('fs');

function getFiles(dir) {

    console.log('\n\n========================================\n\n');

    console.log('>> Scanning files from ' + dir + '\n');

    let files = [];

    try {
        let stats = fs.statSync(dir);

        console.log('>> Stat', stats);

        if (stats.isDirectory()) {
            files = fs.readdirSync(dir)
                .filter (function(filename) {
                    return !(fs.statSync(dir + filename).isDirectory()) &&
                     filename[0] !== '.' && filename.indexOf('.md') === -1;
                     // I don't want folders, dot files or the README.md
                });
        }

    } catch ( e ) {
        console.log('>> Error', e);
    }

    console.log('>> Got ' + files.length + ' files! :)\n');

    return files;
}

function done(success, file) {
    success.push(file);
}

function build() {
    DIRS.forEach(function(targetDir) {
        let files = getFiles(targetDir),
            success = [];

        for (var i in files) {

            console.log('>> Dealing with', files[i]);

            if (files.hasOwnProperty(i) && files[i]) {

                console.log('>> Moving', files[i], 'to the right place...');

                // name of new directory 
                let dirname = [files[i]
                        .slice(0, -3) // trim `.js` extension 
                        .replace(/^(\d{1,3})\.*/, '$1.'), // add a dot after index
                        '/'].join(''),

                    // original file name 
                    oldPath = targetDir + files[i],

                    // new file name
                    newPath = ['../', dirname, files[i].match(/^(\d{1,3})/)[0], '.js'].join('');

                console.log('>> Making new folder', '../' + dirname);
                fs.mkdirSync('../' + dirname);

                console.log('>> Moving the pleasure into the box... ');
                fs.renameSync(oldPath, newPath); 
                // move js file into the new place
                // and rename it

                console.log('>> Creating some creatures... ');
                fs.writeFileSync('../' + dirname + 'README.md',
                    ['#', files[i], '\n\n',
                        'Check out [the problem](https://leetcode.com/problems/',
                        dirname.replace(/^(\d{1,3}\.\s)/, '').split(' ').join('-').toLowerCase(), ')\n\n',
                        '## Solution\n\nTalk is cheap, just check out the code. :P'].join(''));

                console.log('>> Done! \n');
                done(success, files[i]);
            } else {
                console.log('>> I\'ve decided to let it alone. Don\' ask me why. :P\n');
            }
        }

        if (success.length) {
            console.log('Build successfully: ' + success.join(', ') + '! ');
        }

        console.log('\n\n========================================\n\n');
    });
}

build();