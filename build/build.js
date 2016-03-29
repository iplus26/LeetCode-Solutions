'use strict';

const targetDir = '../JavaScript/';
let fs = require('fs');

function getFiles(dir) {
    let files = fs.readdirSync(dir);
    return files;
}

function done() {
    console.log('Done!\n');
}

function build() {
    let files = getFiles(targetDir);
    for (var i in files) {

        console.log('Moving', files[i], 'to the right place...');

        // name of new directory 
        let dirname = [files[i]
                .slice(0, -3) // trim `.js` extension 
                .replace(/^(\d{1,3})/, '$1.'), // add a dot after index
                '/'].join(''),

            // original file name 
            oldPath = targetDir + files[i],

            // new file name
            newPath = ['../', dirname, files[i].split(' ')[0], '.js'].join('');


        fs.mkdirSync('../' + dirname); // make new directory
        fs.renameSync(oldPath, newPath); // move js file into the new place
        // and rename it

        fs.writeFile('../' + dirname + 'README.md',
            ['#', files[i], '\n\n',
                'Check out [the problem](https://leetcode.com/problems/',
                dirname.replace(/^(\d{1,3}\.\s)/, '').split(' ').join('-').toLowerCase(), ')\n\n',
                '## Solution\n\nTalk is cheap, just check out the code. :P'].join(''),
            done);
    }
}

build();