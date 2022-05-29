# 单调栈
- 维护一个递增/递减的单调栈，减少循环次数
- 例题496，503
### 496
```js
var nextGreaterElement = function(nums1, nums2) {
    var len = nums1.length;
    var len2 = nums2.length;
    var res = [];
    var flag = false,flag2 = false;;
    for(var i = 0 ; i < len ; i++){
        for(var j = 0 ; j < len2 ; j++){
            if(nums2[j]==nums1[i]){
                flag = true;
            }
            if(flag == true && nums2[j] > nums1[i]){
                flag2 = true;
                res.push(nums2[j]);
                break;
            }
        }
        if(flag2 == false) res.push(-1);
        flag = false;
        flag2 = false;
    }
    return res;
};
```
### 503
```js
var nextGreaterElements = function(nums) {
    //单调栈
    var stack = [];
    //思路，把nums复制一份，拼起来
    arr = [...nums,...nums];
    var len = arr.length;
    var res = new Array(nums.length).fill(-1);
    for(var i = 0 ; i < arr.length ; i++){
        //维持一个递减栈,找到大于的元素就加入res数组
        while(stack.length && arr[i]>arr[stack[stack.length-1]]){
            var index = stack.pop();//当前记录单调栈下标
            res[index] = arr[i];//替换为大于它的arr[i]
            //没有被替换的则是-1
        }
        stack.push(i)//存的是下标
    }
    return res.slice(0,len/2);
};

```