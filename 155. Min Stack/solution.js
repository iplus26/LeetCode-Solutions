/**
 * @constructor
 */
var MinStack = function() {
    this.lst = [];
    this.minLst = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
MinStack.prototype.push = function(x) {
    this.lst.push(x);
    if (this.minLst.length === 0 || x <= this.minLst[this.minLst.length - 1]) {
        this.minLst.push(x);
    }
};

/**
 * @returns {void}
 */
MinStack.prototype.pop = function() {
    if (this.lst[this.lst.length - 1] === this.minLst[this.minLst.length - 1]) {
        this.minLst.pop();
    }
    return this.lst.pop();
};

/**
 * @returns {number}
 */
MinStack.prototype.top = function() {
    return this.lst[this.lst.length - 1];
};

/**
 * @returns {number}
 */
MinStack.prototype.getMin = function() {
    return this.minLst[this.minLst.length - 1];
};
