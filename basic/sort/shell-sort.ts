// 基于插入排序思路的一种优化,使用了分治思想,使其更适应大数据集
// 理论时间复杂度位于O(nlogn) 和O(nlog2/3),具体效果取决于gap的选择;空间复杂度为O(1),属于原地排序
// 每隔gap取一个值,组成多个子数列.对每个子数列进行插入排序. 注意"子数列"仍然位于原来的位置上.而不是重新组成新数组.
// 每次排序结束后将gap缩小为原来的1/2,直到gap等于1

function shellSort(arr) {
    let n = arr.length;
    let gap = Math.floor(n / 2); // 初始增量

    // 动态定义增量，直到增量为1
    while (gap > 0) {
        // 对每个子序列进行插入排序
        for (let i = gap; i < n; i++) {
            let temp = arr[i];
            let j;
            // 在子序列中找到合适的位置插入元素
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                arr[j] = arr[j - gap];
            }
            arr[j] = temp;
        }
        // 减小增量
        gap = Math.floor(gap / 2);
    }
    return arr;

 
