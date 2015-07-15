'use strict';
/**
 * @constructor
 */
var Queue = function() {
    this.stk = new Stack();
};

/**
 * @param {number} x
 * @returns {void}
 */
Queue.prototype.push = function(x) {
    this.stk.push(x);
};

/**
 * @returns {void}
 */
Queue.prototype.pop = function() {
    var anotherStk = new Stack();
    while (this.stk.length() > 1) {
        anotherStk.push(this.stk.pop());
    }
    var x = this.stk.pop();
    while (anotherStk.length() > 0) {
        this.stk.push(anotherStk.pop());
    }
    return x;
};

/**
 * @returns {number}
 */
Queue.prototype.peek = function() {
    return this.stk.lst[0];
};

/**
 * @returns {boolean}
 */
Queue.prototype.empty = function() {
    return this.stk.length() === 0;
};

var Stack = function() {
    this.lst = [];
};

Stack.prototype.push = function(x) {
    this.lst.push(x);
};


Stack.prototype.pop = function() {
    return this.lst.pop();
};

Stack.prototype.top = function() {
    return this.lst[this.lst.length - 1];
};

Stack.prototype.length = function() {
    return this.lst.length;
};
