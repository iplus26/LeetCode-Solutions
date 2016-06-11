/*
 * Author: Ivan Jiang
 *
 * This module will update ../README.md file
 */
'use strict';

var Promise = require('bluebird'),
  fs = Promise.promisifyAll(require('fs'));

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

  var str = 'This is my version of LeetCode solutions. \n\n' +
    '__{{count}}__ / ' + data.count + ' questions solved. \n' +
    '(😄 for *Easy*, 😎 for *Medium*, 😈 for *Hard*)\n\n' +

    '| # | Difficulty | Title | C | C++ | Java| JavaScript |\n' +
    '|:-:|:----------:|:----- |:-:| :-: | :-: |:----------:|\n';

  var problems = data.problems;

  problems.forEach(function(pr, i) {

    // console.log('####### Problems', pr, Object.prototype.toString.call(pr.files));

    if (langComplete(pr, ['c', 'cpp', 'js', 'java'])) {
      count++;
    }

    if (pr) {
      str += ['',
        i,
        di[pr.diff], // difficulty
        '[' + (pr.isLock ? '🔒'  : '') + pr.title + '](' + pr.url + ')', // link
        pr.lang.c ? '⭐️' : '', // c
        pr.lang.cpp ? '⭐️' : '', // cpp
        pr.lang.java ? '⭐️' : '', // java
        pr.lang.js ? '⭐️' : '', // js
        ''].join('|') + '\n';
    }
  });

  str = str.replace('{{count}}', count);

  return fs.writeFileAsync('../README.md', str);

};

module.exports = {
  writeAsync: writeAsync
};