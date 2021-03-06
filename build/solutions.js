/*
 * Author: Ivan Jiang
 *
 * Walk through my solutions
 */
'use strict';

var Promise = require('bluebird'),
  fs = Promise.promisifyAll(require('fs')),
  leftPad = require('left-pad');

var walk = function(data) {
  return Promise.all(data.problems.map(function(pr, i) {
    if (pr) {
      return fs.readdirAsync(__dirname + '/../' + leftPad(i, 3, 0) + '. ' + pr.title)
        .then(function(content) {
          data.problems[i].files = content; // array of files
          return content;
        })
        .catch(function(e) {
          fs.mkdirAsync(__dirname + '/../' + leftPad(i, 3, 0) + '. ' + pr.title);
        });
    }

    return;

  }));
};

module.exports = {
  walkAsync: walk,
};