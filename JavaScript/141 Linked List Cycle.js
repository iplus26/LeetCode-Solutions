'use strict';
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (head === null) {
        return false;
    }
    var p = head,
        q = head;

    while (true) {
        q = q.next;
        p = p.next;
        if (q === null) return false;
        if (p === null) {
            return false;
        } else {
            p = p.next;
        }
        if (p === null) return false;
        if (q == p) return true;
    }

    return true;
};