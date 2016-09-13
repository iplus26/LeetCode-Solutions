/*
 * Author: Ivan Jiang
 * 
 * This module is used to grab the problem list of LeetCode OJ 
 * (https://leetcode.com/problemset/algorithms/), and then save 
 * the html file into ./leetcode.html
 */

'use strict';

var rp = require('request-promise'),
  Promise = require('bluebird');
  // fs = Promise.promisifyAll(require('fs')),
  // cheerio = require('cheerio');

var crawl = function crawl() {
  return rp.get('https://leetcode.com/api/problems/algorithms/')
    .then(function(json) {
      var key = 'stat_status_pairs',
          log = console.log,
          toString = Object.prototype.toString;

      try {
          var data = JSON.parse(json);

          if (data && toString.call(data[key]) === '[object Array]') {
              log('Length of leetcode problems: ' + data[key].length);
              return Promise.resolve(data);
          }
          else log('Fail, typeof data: ' + typeof data + ' ' + JSON.stringify(data));
      } catch(e) {
          log('Parse json data failed. ');
      }

      return Promise.reject(new Error('fetch failed'));
    });
};

module.exports = {
  crawlAsync: crawl
};