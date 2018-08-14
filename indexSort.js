window.onload = function () {
    var arr = [3, 9, 8, 0, 1, 7, 4, 5, 99, 4, 66];
    //冒泡排序 将大的元素依次交换沉下去，比较无序元素序列
    //外层循环 确定遍历数组的次数 内层循环 将当前遍历的值和剩下的无序数组进行比较与交换
    function bubbleSort(arr) {
        var flag= true;
        for (var i = 0; i < arr.length-1; i++) {
            //排序的次数 数组长度-1
            if(flag){
                flag = false;
                for (var j = 0; j < arr.length - 1-i; j++) {
                    //比较 
                    if (arr[j] > arr[j + 1]) {
                        var temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
                        flag = true; //只要有交换就会变为true,
                    }
                }
            }
        }
        return arr;
    }
    //选择排序 第一趟循环遍历N个数据，找到最小的与第一个交换，第二趟循环遍历剩下的n-1个数据，最小的与第二个交换，直到最后遍历最后两个数据
    //外层循环来确认当前最小的索引（位置） 内层循环来进行最小位置的元素与其他元素的比较
    function selectorSort(arr) {
        var minIndex, temp;
        for (var i = 0; i < arr.length; i++) {
            minIndex  = i;
            for (var j = i+1; j < arr.length; j++) {
                if(arr[minIndex]>arr[j]){
                    minIndex = j;
                }
            }
            var temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
        }
        return arr;
    }
    //快排 建立基准 创建左右数组 小于基准进左数组  大于基准进右数组 满足长度大于1递归调用 
    function quickSort(arr){
        if(arr.length>1){
            var left=[],right =[],midTemp=arr.splice(Math.floor(arr.length/2),1)[0];
            for(var i=0;i<arr.length;i++){
                if(arr[i]<midTemp){
                    left.push(arr[i]);
                }else{
                    right.push(arr[i])
                }
            }
        }
        return quickSort(left).concat(midTemp,quickSort(right));
    }
    //插入排序 
    //外层循环 确定当前被插入的数 内层循环 条件循环，比较当前和当前的前一位元素，满足条件将被插入元素索引后移一位，遍历索引减1否则不减，将插入元素插入当前索引的后面一位
    function insertSort(arr){
        for(var i=1;i<arr.length;i++){
            var current = arr[i];
            var j=i-1;
            while(j>=0&&current<arr[j]){
                arr[j+1]=arr[j];
                j--;
            }
            //最后的j即为当前应该插入的位置
            arr[j+1] = current;
        }
        return arr;
    }
    //归并 第一步划分到最小 第二步合并
    function mergeSort(arr){
        if (arr.length < 2) {
            return arr;
        }
        //切分
        var midTemp = Math.floor(arr.length / 2);
        var left = arr.slice(0, midTemp);
        var right = arr.slice(midTemp, arr.length);
        var newLeft = mergeSort(left);
        var newRight = mergeSort(right);
        return merge(newLeft, newRight);
        //归并 将小的推入数组并且从原数组删除，新数组连接上剩下的的数组即是排序之后的
        function merge(left, right) {
            var newArr = [];
            var i=j=0;
            while(i<left.length && j<right.length){
                if(left[0]<right[0]){
                    newArr.push(left.shift());
                }else{
                    newArr.push(right.shift());
                }
            }
            return newArr.concat(left,right);
        }
    }
    console.log(mergeSort(arr));
}