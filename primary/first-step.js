function arrTest(num) {
    //操作1
    console.time(`push出一个长度是${num}的数组所花时间`)
    const arr1 = []
    for (let i = 0; i < num; i++) {
        arr1.push(i)
    }
    console.timeEnd(`push出一个长度是${num}的数组所花时间`)
    //操作2
    console.time(`先new出一个长度是${num}的数组,再逐个修改值所花时间`)
    const arr2 = new Array(num)
    for (let i = 0; i < num; i++) {
        arr2[i] = i
    }
    var a = console.timeEnd(`先new出一个长度是${num}的数组,再逐个修改值所花时间`)
    console.log('\n')
    console.log(a)
}

arrTest(22222222)
arrTest(66666666)
// for(var i= 2;i < 888888888;i=i++){
//     console.log(i)
//     arrTest(i)
// }

// 两种不同的操作在花费时间上有着较大的差异
// 这是因为对内存操作的不同

//操作1
//1. 先开辟一块内存来放置新数组
//2. 向这块数组内添加新的元素
//3. 当数组所占空间增大到超过所被分配的内存空间时. 另外开辟一段新的内存,将数组的数据复制到新内存.释放掉旧内存.
//4. 当数组再次占满所被分配的内存空间时,重复上述操作.


//操作2 
//1. 根据数组长度开辟内存空间
//2. 根据索引修改相应的值


//这就是为什么操作2 所需时间小于操作1
