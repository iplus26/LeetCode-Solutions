'use strict';

var Promise = require('bluebird'),
  fs = Promise.promisifyAll(require('fs')),
  cheerio = require('cheerio'),
  chalk = require('./myChalk'),

  crawlAsync = require('./crawl').crawlAsync,
  writeAsync = require('./updateReadme').writeAsync,
  walkAsync = require('./solutions').walkAsync;

const LEETCODE_ORIGIN = 'https://leetcode.com';

var getLeetCode = function getLeetCode(count) {

  count = count || 0;

  return fs.readFileAsync(__dirname + '/leetcode.html', 'utf-8')
    .then(function(html) {

      var $ = cheerio.load(html),
        $problem = $('table#problemList tr');

      var problems = [];

      $problem.each(function(i, el) {

        if (i === 0) {
          return;
        }

        var $pr = $(el).find('td');

        /*
         * <tr> 
         *   <td>...</td>
         *   <td> {index} </td>
         *   <td>
         *     <a href="/problems/some-problem/">Some Problem</a>
         *     <i class="fa fa-lock"> ... </i>
         *   </td>
         *   <td> {accept rate} </td>
         *   <td> ... </td>
         *   <td> ... </td>
         *   <td> {difficulty} </td>
         * </tr>
         */

        var pr = {
          index: parseInt($pr.eq(1).text()),
          url: LEETCODE_ORIGIN + $pr.eq(2).children('a').attr('href'),
          title: $pr.eq(2).children('a').text(),
          isLock: !!($pr.eq(2).children('i.fa-lock').length),
          acRate: $pr.eq(3).text(),
          diff: $pr.eq(6).text(),
        };

        problems[pr.index] = pr;
      });

      console.log(chalk.info('Found') + ' ' + ($problem.length - 1) +
        ' problems listed (build/leetcode.html) locally. ');

      return {
        count: $problem.length - 1,
        problems: problems
      };
    })
    .catch(function(e) {
      // if file doesn't exist
      console.log(chalk.warning('Not found locally LeetCode OJ list! '));

      console.log(chalk.info('Fetching') + ' the latest data from Internet... ');
      return crawlAsync().then(function() {
        return getLeetCode();
      });
    });

};

console.log(chalk.info('Welcome') + ' Building your version of LeetCode OJ solutions... ');

getLeetCode()
  .then(function(data) {
    // Walk through the local file list
    return walkAsync(data).then(function() {
      return writeAsync(data);
    });
  })
  .then(function() {
    console.log(chalk.info('Use `git diff` to check out the updates. '));
  });