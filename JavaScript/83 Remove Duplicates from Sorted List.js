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

var deleteDuplicates = function(head) {
    var p = head;

    while (p !== null) {
        if (p.next === null) {
            break;
        }
        if (p.val == p.next.val) {
            p.next = p.next.next;
        } else {
            p = p.next;
        }
    }

    return head;
};