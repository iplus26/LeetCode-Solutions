/*
 * Author: Ivan Jiang
 *
 * This module will update ../README.md file
 */
'use strict';

var Promise = require('bluebird'),
  fs = Promise.promisifyAll(require('fs')),
  chalk = require('./myChalk');

/*
 * langComplete(problemObj, ['c', js']); ===> return true
 */
var langComplete = function(pr, search) {

  var files = pr.files;

  pr.lang = pr.lang || {};

  if (files && Object.prototype.toString.call(files) === '[object Array]') {
    for (var i = 0, len = files.length; i < len; i++) {
      var frag = files[i].split('.');
      var index = search.indexOf(frag[frag.length - 1]);
      if (index > -1) {
        pr.lang[search[index]] = true;
      }
    }
  }

  return !!Object.keys(pr.lang).length;
};

var writeAsync = function(data) {

  var di = {
    'Easy': '😄',
    'Medium': '😎',
    'Hard': '😈',
  };

  var count = 0;

  var str = '# Build Your Own Version\n\n' +
    'I write a tool (check out the `build/` folder) to optimize the process. ' +
    'It will __programmatically__: \n\n' +
    '1. Fetch the problem list from LeetCode OJ and save in `build/leetcode.html`\n\n' +
    '2. Check out the local solutions (Pls save the code as ' +
    '`123. Some Problem/whatever-you-like.js`)\n\n' +
    '3. Update the README file\n\n' + 

    'Try it: Just clone the repo and run\n\n' + 
    '    npm install && npm run build\n\n' + 
    'Be free to contact to discuss about this simple tool. \n\n' + 

    '# My Version\n\n' +
    'This is my version of LeetCode solutions. \n\n' +
    '__{{count}}__ / ' + data.count + ' questions solved. \n' +
    '(😄 for *Easy*, 😎 for *Medium*, 😈 for *Hard*)\n\n' +

    '| # | Difficulty | Title | C | C++ | Java| JavaScript |\n' +
    '|:-:|:----------:|:----- |:-:| :-: | :-: |:----------:|\n';

  var problems = data.problems;

  problems.forEach(function(pr, i) {
    if (langComplete(pr, ['c', 'cpp', 'js', 'java'])) {
      count++;
    }

    if (pr) {
      str += ['',
        i,
        di[pr.diff], // difficulty
        '[' + (pr.isLock ? '🔒' : '') + pr.title + '](' + pr.url + ')', // link
        pr.lang.c ? '⭐️' : '', // c
        pr.lang.cpp ? '⭐️' : '', // cpp
        pr.lang.java ? '⭐️' : '', // java
        pr.lang.js ? '⭐️' : '', // js
        ''].join('|') + '\n';
    }
  });

  str = str.replace('{{count}}', count);

  console.log(chalk.info('Updating') + ' README.md file... ');

  return fs.writeFileAsync(__dirname + '/../README.md', str);

};

module.exports = {
  writeAsync: writeAsync
};