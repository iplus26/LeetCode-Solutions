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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var fast = head,
        target = head;

    for (var i = 0; i < n + 1; i++) {
        if (fast !== null) {
            fast = fast.next;
        } else {
            // head node is to be deleted.
            return head.next;
        }

    }

    while (fast !== null) {
        fast = fast.next;
        target = target.next;
    }

    if (target.next !== null) {
        target.next = target.next.next;
    }

    return head;
};