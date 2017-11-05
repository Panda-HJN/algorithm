function arrTest(num) {
    console.time(`push出一个长度是${num}的数组所花时间`)
    const arr1 = []
    for (let i = 0; i < num; i++) {
        arr1.push(i)
    }
    console.timeEnd(`push出一个长度是${num}的数组所花时间`)
    console.time(`先new出一个长度是${num}的数组,再逐个修改值所花时间`)
    const arr2 = new Array(num)
    for (let i = 0; i < num; i++) {
        arr2[i] = i
    }
    console.timeEnd(`先new出一个长度是${num}的数组,再逐个修改值所花时间`)
    console.log('\n')
}

arrTest(22222222)

// 两种不同的操作在花费时间上有着较大的差异
// 这是因为对内存操作的不同