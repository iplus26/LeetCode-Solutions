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
var swapPairs = function(head) {
	var node1 = head, node2 = null, lastPair = null;
	
	if (head && head.next) {
		head = head.next;
		
		while (node1 && node1.next) {
			node2 = node1.next;
			
			// Swap
			node1.next = node2.next;
			node2.next = node1;
			
			if (lastPair)
				// Link last pair
				lastPair.next = node2;
			
			// Move on
			lastPair = node1;
			node1 = node1.next;
		}
	}
	
	return head;
};

var node4 = {val: 4, next: null};
var node3 = {val: 3, next: node4};
var node2 = {val: 2, next: node3};
var head = {val: 1, next: node2};

console.log(swapPairs(head));