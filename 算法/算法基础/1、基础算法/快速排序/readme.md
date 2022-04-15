# 快速排序-分治
## 思路
- 确定分界点 q[left],q[(left+right)/2],q[right]
- 调整范围 [<=x,>=x]分界点不一定是x
- 递归左右两段

## 过程
1. a[ ],b[ ]
2. q[l-r] 分为q[i]<=x放到a[ ],q[i]>=x放到b[ ]
3. a[ ] -> q[ ],b[ ]->q[ ]

## 快排模板
```c++
void quick_sort(int q[], int l, int r)
{
    if (l >= r) return;

    int i = l - 1, j = r + 1, x = q[l + r >> 1];
    while (i < j)
    {
        do i ++ ; while (q[i] < x);
        do j -- ; while (q[j] > x);
        if (i < j) swap(q[i], q[j]);
    }
    quick_sort(q, l, j), quick_sort(q, j + 1, r);
}
```

## 785题目、快速排序
给定你一个长度为 n的整数数列。

请你使用快速排序对这个数列按照从小到大进行排序。

并将排好序的数列按顺序输出。

**输入格式**

输入共两行，第一行包含整数 n

第二行包含 n个整数（所有整数均在 1∼10^9范围内），表示整个数列。

**输出格式**

输出共一行，包含 n个整数，表示排好序的数列。

**数据范围**

1≤n≤100000

**输入样例：**
```
5
3 1 2 4 5
```
**输出样例：**
```
1 2 3 4 5
```
**题解**
```c++
# include <iostream>
using namespace std;
const int N = 1e6+10;
int n;
int q[N];
void quick_sort(int q[], int l, int r)
{
    if (l >= r) return;

    int i = l - 1, j = r + 1, x = q[l + r >> 1];
    while (i < j)
    {
        do i ++ ; while (q[i] < x);
        do j -- ; while (q[j] > x);
        if (i < j) swap(q[i], q[j]);
    }
    quick_sort(q, l, j), quick_sort(q, j + 1, r);
}
int main(){
    scanf("%d", &n);
    for(int i=0;i<n;i++)scanf("%d",&q[i]);
    quick_sort(q,0,n-1);
    for(int i=0;i<n;i++) printf("%d ",q[i]);
    return 0;
}
```

## 786题目、第k个数
- 略