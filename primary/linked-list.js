//首先实现一个最简单的单向链表

//节点类Node
//value 是节点存储的数据, next 表示下一个节点在哪里(引用或者指针)
class Node {
    constructor(value, next) {
        this.value = value
        this.next = next
    }
}

//链表类LinkedList
//head 是链表的头
class LinkedList {
    constructor() {
        this.head = null
    }
    //在值为 after 的节点后面插入一个值为 value 的节点
    insert(value, after) {
        //构造一个值为value的新节点
        const nodeToInsert = new Node(value)
        //如果这个链表没有头,那么新节点就作为链表的头 
        if (!this.head) {
            this.head = nodeToInsert
            return
        }
        //先把目标节点找出来
        const node = this._findNode(after)
        //把目标节点原来的索引存一下
        const originalNext = node.next
        //让目标节点的索引指向新的节点
        node.next = nodeToInsert
        //把目标节点原来的next赋给新节点的next
        nodeToInsert.next = originalNext
    }


    //查找value 为某个值的节点
    _findNode(value) {
        //如果没有头 说明链表是空的
        if (!this.head) return null
        //如果头的值等于value 把头返回去
        if (this.head.value === value) return this.head
        let cur = this.head
        while (cur.next) { //如果下一个节点存在
            cur = cur.next
            if (cur.value === value) return cur
        }
        return null
    }
    push() {

    }
    remove() {

    }
}

//一个简单链表
//每个节点都存储着下一个节点的位置.所以只要知道一个节点的索引,那么就能找到后面所有的节点.