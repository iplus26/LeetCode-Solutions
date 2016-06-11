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
var isPalindrome = function(head) {
    if (head === null || head.next === null) {
        return true;
    }
    
    var map = [], list = head;
    
    while (list !== null) {
        map.push(list);
        list = list.next;
    }
    
    for (var i = map.length - 1; i >= 0; i--) {
        if (map[i].val != head.val) {
            return false;
        }
        head = head.next;
    }
    
    return true;
};
