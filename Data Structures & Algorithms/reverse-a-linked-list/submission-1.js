/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        // if 0 or 1 elements, then return head because reversing will be the same
        if (head == null || head.next == null) {
            return head;
        }

        // make pointers
        let prev = null; // points to previous node
        let curr = head; // points to current node
        let next = null; // points to next node to not break the chain
        
        // loop through the linked list
        while (curr != null) {
            // set our next pointer to not break the chain
            next = curr.next;

            // reverse the list by setting the current node's next property to the previous node
            curr.next = prev;

            // move the prev and curr pointers up one to continue through the list
            prev = curr;
            curr = next;
        }

        // return prev because at the end of the loop it will store the new head after reversal
        return prev;
    }

    // time complexity: O(n), looping thru list once
    // space complexity: O(1), using pointer variables and not data structures
}
