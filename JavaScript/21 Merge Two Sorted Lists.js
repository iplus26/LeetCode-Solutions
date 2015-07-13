/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
'use strict';

var mergeTwoLists = function(l1, l2) {
    if (l1 === null) {
        return l2;
    }
    if (l2 === null) {
        return l1;
    }

    var master = new ListNode(),
        head = master;

    while (l1 !== null && l2 !== null) {
        if (l1.val <= l2.val) {
            master.val = l1.val;
            l1 = l1.next;
        } else {
            master.val = l2.val;
            l2 = l2.next;
        }

        master.next = new ListNode();
        master = master.next;
    }

    if (l1 !== null) {
        master.val = l1.val;
        master.next = l1.next;
    } else {
        master.val = l2.val;
        master.next = l2.next;
    }

    return head;
};