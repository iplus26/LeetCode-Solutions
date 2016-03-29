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
var oddEvenList = function(head) {
	var ret = head;
	
	// if null, 1->null, 1->2->null 
	// just return
	if (head && head.next && head.next.next) {
		
		var tail = head.next,
			length = 0,
			watershed;
		
		while (tail.next) {
			tail = tail.next;
			length++;
		}
		
		watershed = tail;
		
		if (length % 2 === 0) {
			// `tail` is even
			while (head.next !== watershed) {
				tail.next = head.next;
				head.next = head.next.next;
				head = head.next;
				tail.next.next = null;
				tail = tail.next;
			}
			// 1->3->5->...->head(odd)->watershed(even)->2->4->...->tail(even)
			tail.next = watershed;
			head.next = watershed.next;
			watershed.next = null;
		} else {
			// `tail` is odd
			while (head !== watershed) {
				tail.next = head.next;	// link `n+1` to `tail`
				head.next = head.next.next; // link `n+2` to n
				head = head.next;
				tail.next.next = null;
				tail = tail.next;
			}	
		}
	}
	
	return ret;
};