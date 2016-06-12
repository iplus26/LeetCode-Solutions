/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    var p = headA, q = headB;
    
    if (p === null || q === null) return null;
    
    while (p != q) {
        p = p.next;
        q = q.next;
        
        if (p == q) return p;
        
        if (p === null) p = headB;
        if (q === null) q = headA;
    }
    
    return p;
};
