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
var detectCycle = function(head) {
    if(!head){
        return null;
    }    
    if( hasCycle(head)){
        const ws = new WeakSet();
        let cur=head;
        while(true){
            if(ws.has(cur)){
                return cur;
            }
            else{
                ws.add(cur);
                cur = cur.next;
            }
        }
    }
    return null;
};
const hasCycle = function(head){
    let slow= head;
    let fast= head;
    while(fast.next&&fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
        if(slow===fast)
            return true;
    }
    return null;
}