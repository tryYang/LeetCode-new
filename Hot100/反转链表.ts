
  class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }
 

function reverseList(head: ListNode | null): ListNode | null {
    if(!head||!head.next){
        return head;
    }
    let p:ListNode| null = null;
    let q:ListNode|null= head;
    while(q){
        let k = q.next;      
        q.next=p;          
        p=q;
        q=k;
    } 
    return p;
};