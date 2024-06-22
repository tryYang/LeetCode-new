/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    //当另一个数组为空时 直接返回另一个数组
    if(!l1){
        return l2;
    }
    if(!l2){
        return l1;        
    }
    //将链表的值存入数组
    const arr1 = new Array();
    const arr2 = new Array();
    while(l1){
        arr1.push(l1.val);
        l1 = l1.next
    }
    while(l2){
        arr2.push(l2.val);
        l2 = l2.next
    }
    //先初始化个头结点 ，最终返回next结点
    let res = new ListNode(-1)  ;
    //记录是否需要进一位 模拟加法
    let jingwei = 0; 
    // 通过cur进行加入链表结点的操作 
    let cur = res;   
    while(arr1.length||arr2.length){
        // shift()方法返回头结点的值，并移除数组头部元素
        let val1 = arr1.length?arr1.shift():0;
        let val2 = arr2.length?arr2.shift():0;
        //尾插法
        const p = new ListNode((val1+val2+jingwei)%10);
        jingwei = val1 + val2+jingwei>=10?1:0;
        cur.next = p;
        cur = cur.next;
    }    
    //最终处理，如果进位为1  应再加个值为1 的结点
    if( jingwei ){
           const p = new ListNode(jingwei);   
           cur.next = p; 
    }
    return res.next;
};