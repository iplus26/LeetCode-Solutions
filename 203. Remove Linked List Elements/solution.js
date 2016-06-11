/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    while (head !== null && head.val === val) {
        head = head.next;
    }
    
    var list = head;
    var prev = null;
    
    while (list !== null) {
        if (list.val === val) {
            // delete
            prev.next = list.next;
        } else {
            prev = list;
        }
        list = list.next;
    }
    
    return head;
};
