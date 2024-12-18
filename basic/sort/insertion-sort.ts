function insertionSort(arr) {
            for(let i  =1;i<arr.length;i++){
                const current= arr[i]
                let prevIndex = i - 1
                while(arr[prevIndex]>current&&prevIndex>=0){
                    [arr[prevIndex],arr[prevIndex+1]]=[arr[prevIndex+1],arr[prevIndex]]
                    prevIndex--
                }
                arr[prevIndex+1] = current
            }
            return arr
}

// 左边是有序区域,右边是无序区域.初始状态视第一个元素为有序区域
// 遍历元素,把元素"插入"到左侧有序区的合适位置
// 外循环从i=1开始
// 注意prevIndex的边界条件
// 时间复杂度最好O(n),最差O(n^2);空间复杂度O(1)
