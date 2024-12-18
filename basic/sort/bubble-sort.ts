function bubbleSort(arr:number[]):number[]{
    if(!arr.length){
        return arr
    }
    for(let i = 0;i<arr.length -1;i++){
        let swapped = false
        for(let j = 0; j<arr.length - 1 -i;j++){
            if(arr[j]>arr[j+1]){
            let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                swapped = true
            }
            }
            if(!swapped){
                break
            }
    }
    return arr
}
// 左边是无序区,右边是有序区
// 把左边的元素逐个"冒泡"到右边合适的位置上
// 外层循环 length-1 次
// 内层 length-1-i次 是"冒泡"到右边合适位置的过程
// 时间复杂度最好O(n^1) 最坏O(n^2)
// 属于原地排序算法,空间复杂度O(1)
