/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     next: _Node | null
 *     random: _Node | null
 * 
 *     constructor(val?: number, next?: _Node, random?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */


function copyRandomList(head: _Node | null): _Node | null {

    const dummy = new _Node(0, null)
    const map = new Map<_Node, _Node>()
    let tail = dummy
    let p = head
    while (p) {
        tail.next = new _Node(p.val, null, p.random)
        map.set(p, tail.next)
        tail = tail.next
        p = p.next
    }
    p = dummy.next
    while(p){
        p.random = map.get(p.random)
        p = p.next
    }

    return dummy.next
};