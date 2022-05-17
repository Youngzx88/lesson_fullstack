function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
const a1 = new ListNode(1);
const a2 = new ListNode(2);
const a3 = new ListNode(3);
const a4 = new ListNode(4);
const a5 = new ListNode(5);
a1.next = a2;
a2.next = a3;
a3.next = a4;
a4.next = a5;
a5.next = null;

function reverseList(head){
    if(!head || !head.next) return head;
    let cur = head;//用cur暂存当前节点
    let pre = null;//前驱节点
    while(cur){
        const next = cur.next;//next保存当前节点的下一个节点
        // cur.next = pre;
        // pre = cur;//前驱节点 为成为下一轮的后继存好值
        cur = next;//往后遍历
    }
    return pre;
}
console.log(reverseList(a1));