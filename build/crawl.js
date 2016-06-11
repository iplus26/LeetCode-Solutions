/*
 * Author: Ivan Jiang
 * 
 * This module is used to grab the problem list of LeetCode OJ 
 * (https://leetcode.com/problemset/algorithms/), and then save 
 * the html file into ./leetcode.html
 */

'use strict';

var rp = require('request-promise'),
  Promise = require('bluebird'),
  fs = Promise.promisifyAll(require('fs')),
  cheerio = require('cheerio');

var crawl = function crawl() {
  return rp.get('https://leetcode.com/problemset/algorithms/')
    .then(function(html) {

      var $ = cheerio.load(html);

      // console.log('############### ' + ($('#problemList tr').length - 1) + ' ###############');

      return fs.writeFileAsync(__dirname + '/leetcode.html', $('#problemListRow').html());
    });
};

module.exports = {
  crawlAsync: crawl
};