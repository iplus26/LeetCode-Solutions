/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
'use strict';
var reverseList = function(head) {
    if (head === null || head.next === null) {
        return head;
    }

    var path = [];

    while (head.next !== null) {
        path[head.next.val] = head;
        head = head.next;
    }

    // head !== null, while head.next === null, means the end.
    var new_head = head;

    while (path[head] !== null) {
        head.next = path[head.val];
    }

    return new_head;
};