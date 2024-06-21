
 class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
 }


function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    if(!headA||!headB) {
        return null;
    }
    let pA = headA,pB=headB;
    while(!Object.is(pA,pB)){
        //链表1+链表2和 链表2+链表1 长度一致
        pA = Object.is(pA,null)?headB:pA.next;//A遍历完到B
        pB = Object.is(pB,null)?headA:pB.next;//B遍历完到A
    }
    return pA
};