/*
 * Author: Ivan Jiang
 *
 * This module will update ../README.md file
 */
'use strict';

var Promise = require('bluebird'),
  fs = Promise.promisifyAll(require('fs'));

var writeAsync = function(data) {

  var di = {
    'Easy': '😄',
    'Medium': '😎',
    'Hard': '😈',
  };

  var str = 'This is my version of LeetCode solutions. \n\n' +
    '? / ' + data.count + ' questions solved. \n' +
    '(😄 for *Easy*, 😎 for *Medium*, 😈 for *Hard*)\n\n' +

    '| # | Difficulty | Title | C | C++ | JavaScript |\n' +
    '|:-:|:----------:|:----- |:-:| :-: |:----------:|\n';

  var problems = data.problems;

  problems.forEach(function(pr, i) {
    if (pr) {
      str += ['',
        i,
        di[pr.diff], // difficulty
        '[' + pr.title + '](' + pr.url + ')', // link
        '? ms', // C
        '? ms', // Cpp
        '? ms', // JS
        ''].join('|') + '\n';
    }
  });

  return fs.writeFileAsync('../README.md', str);

};

module.exports = {
  writeAsync: writeAsync
};