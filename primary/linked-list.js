//首先实现一个最简单的单向链表

//节点类Node
//value 是节点存储的数据, next 表示下一个节点在哪里(引用或者指针)
class Node {
    constructor(value, next) {
        this.value = value
        this.next = next || null
    }
}

//链表类LinkedList
//head 是链表的头
class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }
    //在值为 after 的节点后面插入一个值为 value 的节点
    insert(value, after) {
        //构造一个值为value的新节点
        const nodeToInsert = new Node(value)
        //如果这个链表没有头,说明链表是空的
        //那么新节点就作为链表的头和尾
        if (!this.head) {
            this.head = nodeToInsert
            this.tail = nodeToInsert
            return
        }
        //先把目标节点找出来
        const node = this._findNode(after)
        if (!node) return
        //把目标节点原来的索引存一下
        const originalNext = node.next
        //让目标节点的索引指向新的节点
        node.next = nodeToInsert

        //把目标节点原来的next赋给新节点的next
        if (originalNext) {
            nodeToInsert.next = originalNext
        } else {
            //如果目标节点已经是队尾
            this.tail = nodeToInsert
        }
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
    push(value) {
        //构造一个值为value的新节点
        const nodeToInsert = new Node(value, null) //因为是向队尾添加新节点,所以新节点的next是null
        if (!this.tail) { //如果这个链表没有队尾
            this.head = nodeToInsert
            this.tail = nodeToInsert
            return
        } else {
            this.tail.next = nodeToInsert
            this.tail = nodeToInsert
        }
    }
    remove(after) {
        const prevNode = this._findNode(after)
        if (!prevNode) return
        if (prevNode.next) {
            const nextNode = prevNode.next.next
            if (!nextNode) this.tail = prevNode
            prevNode.next.next = null
            prevNode.next = nextNode
        }
    }
}

function testShift() {
    const arr = new Array(1111111)
    for (let i = 0; i < 1111111; i++) {
        arr[i] = i
    }
    console.time('使用Array Shift API删去 11111 个数组元素')
    for (let i = 0; i < 11111; i++) {
        arr.shift(0)
    }
    console.timeEnd('使用Array Shift API删去 11111 个数组元素')
}



function testLinkedList() {
    const linkedList = new LinkedList()
    for (let i = 0; i < 1111111; i++) { 
        linkedList.push(i)
    }
    console.time('从链表中删去 11111 个节点')
    for (let i = 0; i < 11111; i++) {
        linkedList.remove(0)
    }
    console.timeEnd('从链表中删去 11111 个节点')
}

testShift()         //33021.589ms 
testLinkedList()    //3.326ms
//由测试可知,链表这种数据结构在对某个位置进行数据操作时更有效率

//一个简单链表
//每个节点都存储着下一个节点的位置.所以只要知道一个节点的索引,那么就能找到后面所有的节点.