'use strict';

var Promise = require('bluebird'),
  fs = Promise.promisifyAll(require("fs")),
  rp = require('request-promise'),
  cheerio = require('cheerio'),

  crawlAsync = require('./crawl').crawlAsync,
  writeAsync = require('./updateReadme').writeAsync;

const LEETCODE_ORIGIN = 'https://leetcode.com';

var getLeetCode = function getLeetCode(count) {

  count = count || 0;

  return fs.readFileAsync('./leetcode.html', 'utf-8')
    .then(function(html) {

      var $ = cheerio.load(html),
        $problem = $('table#problemList tr');

        console.log('Got ' + ($problem.length - 1) + ' problems! ');

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

      return {
        count: $problem.length - 1,
        problems: problems
      };
    })
    .catch(function(e) {
      // if file doesn't exist
      console.log(e);

      console.log('Fetching the latest data from Internet... ');
      return crawlAsync().then(function() {
        return getLeetCode();
      });
    });

};

getLeetCode().then(function(data) {
  console.log(data);

  return writeAsync(data);
});