/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    //快慢指针法  需考虑临界的处理
    let slow = head;
    let fast = head;
    //慢指针的前一个结点
    let slow_pre = head;
    while(n--){
        fast = fast.next;       
    }
    //如果fast直接超出去了，说明是删除的头结点
    if(fast){
        //删除的不是头结点，必有slow_pre,其他的处理可以统一
        while(fast){
            slow_pre = slow;
            slow = slow.next;
            fast = fast.next;
        }
        slow_pre.next = slow.next;
        return head;
    }
    else{
        return head.next;
    }
};