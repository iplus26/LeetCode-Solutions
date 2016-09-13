'use strict';

var Promise = require('bluebird'),
  fs = Promise.promisifyAll(require('fs')),
  cheerio = require('cheerio'),
  chalk = require('./myChalk'),

  crawlAsync = require('./crawl').crawlAsync,
  writeAsync = require('./updateReadme').writeAsync,
  walkAsync = require('./solutions').walkAsync;

const LEETCODE_ORIGIN = 'https://leetcode.com';

var getLeetCode = function getLeetCode(data) {
  return new Promise(function (resolve, reject) {
    if (data === undefined) {
      reject('data is undefined');
    } else {
      resolve(data);
    }
  }) 
    .then(function(data) {

      var key = 'stat_status_pairs',
          problems = [];

      data[key].forEach(function(el, i) {
          var pr = {
            index: el.stat['question_id'],
            url: LEETCODE_ORIGIN + el.stat['question__title_slug'],
            title: el.stat['question__title'],
            isLock: el['paid_only'],
            // acRate: $pr.eq(3).text(),
            diff: ['Easy', 'Medium', 'Hard'][el.difficulty.level + 1],
          };

        problems[pr.index] = pr;
      });

      console.log(chalk.info('Get') + ' ' + data['num_total'] + ' problems. ');

      return {
        count: data['num_total'],
        problems: problems
      };
    });

};

console.log(chalk.info('Welcome') + ' Building your version of LeetCode OJ solutions... ');

crawlAsync()
    .then(function(data) {
        console.log(chalk.info('Success') + ' Fetched LeetCode data! ');
        return getLeetCode(data);
    })
    .then(function(data) {
        console.log(chalk.info('Success') + ' Format raw data! ');
        return walkAsync(data).then(function() {
            return writeAsync(data);
        });
    })
    .then(function() {
        console.log(chalk.info('Use `git diff` to check out the updates. '));
    })

    .catch(function(e) {
        console.log('Failed ' + JSON.stringify(e));
    })