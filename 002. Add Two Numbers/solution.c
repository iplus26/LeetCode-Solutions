/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* addTwoNumbers (struct ListNode* l1, struct ListNode* l2) {
    struct ListNode* p1  = l1;
    struct ListNode* p2  = l2;
    struct ListNode* ans = (struct ListNode*)malloc(sizeof(struct ListNode));
    ans->val = 0;
    struct ListNode* p   = 0;
    int c = 0;    // carry
    while (p1 != 0 || p2 != 0 || c != 0) {
        if (p == 0) {
            p = ans;
        } else {
            p->next = (struct ListNode*)malloc(sizeof(struct ListNode));
            p->next->val = 0;
            p = p->next;
        }
        int a = p1 == 0 ? 0 : p1->val;
        int b = p2 == 0 ? 0 : p2->val;
        int s = (a + b + c) % 10;
        c = (a + b + c) / 10;
        p->val = s;
        p->next = 0;
        p1 = p1 == 0 ? 0 : p1->next;
        p2 = p2 == 0 ? 0 : p2->next;
    }
    return ans;
}
