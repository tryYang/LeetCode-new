
 
 class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
 }
 

function isPalindrome(head: ListNode | null): boolean {
    // 思路一 原地反转链表 判断是否相等  时间复杂度O(n),空间复杂度O(n) 需要深拷贝
    // 思路二 借助栈 时间复杂度O(n),空间复杂度O(n)
    // 找到中间节点，反转后半链表 ，对比值。
    if(!head)
        return true;
   
    let mid = midNode(head);
    let half_end = reverseList(mid.next);
    while(half_end){
        if(half_end.val !== head.val ){
            return false;
        }
        half_end=half_end.next ;
        head=head.next ;
    }
    return true;
};
 const reverseList = function(head){
        let  p = null;
        let  q = head;
        while(q){
            const cur = q.next;
            q.next = p ;
            p=q;
            q=cur;
        }
        return p;
    }
    const midNode = (head) => {
    let fast = head;
    let slow = head;
    while (fast.next !== null && fast.next.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
}
