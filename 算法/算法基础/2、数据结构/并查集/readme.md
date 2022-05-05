# 并查集
1. 将两个元素合并
2. 询问两个元素是否在同一个集合

基本原理：
- 每个集合都用一颗树来表示。
- 树根的编号就是整个集合的编号。
- 每个节点储存他的父节点，p[x]表示x的父节点

问题：
- 如何判断树根：if(p[x] == x)
- 如何求x的集合编号：while(p[x]!=x) x = p[x]; //一直往上找
- 如何合并两个集合：px是x的集合编号，py是y的集合编号。p[x] = y;

## 836题目、合并集合
一共有 n 个数，编号是 1∼n，最开始每个数各自在一个集合中。现在要进行 m个操作，操作共有两种：
1. `M a b`，将编号为 a和 b的两个数所在的集合合并，如果两个数已经在同一个集合中，则忽略这个操作；
2. `Q a b`，询问编号为 a和 b 的两个数是否在同一个集合中；

**输入格式**

第一行输入整数 n 和 m,接下来 m行，每行包含一个操作指令，指令为 M a b 或 Q a b 中的一种。

**输出格式**

对于每个询问指令 Q a b，都要输出一个结果，如果 a 和 b在同一集合内，则输出 Yes，否则输出 No。每个结果占一行。

**数据范围**

1≤n,m≤105

**输入样例：**
```
4 5
M 1 2
M 3 4
Q 1 2
Q 1 3
Q 3 4
```
**输出样例：**
```
Yes
No
Yes
```
**题解**
```c++
#include<iostream>
using namespace std;
const int N=100010;
int p[N];//定义多个集合

int find(int x)
{
    if(p[x]!=x) p[x]=find(p[x]);
    /*
    经上述可以发现,每个集合中只有祖宗节点的p[x]值等于他自己,即:
    p[x]=x;
    */
    return p[x];
    //找到了便返回祖宗节点的值
}

int main()
{
    int n,m;
    scanf("%d%d",&n,&m);
    for(int i=1;i<=n;i++) p[i]=i;
    while(m--)
    {
        char op[2];
        int a,b;
        scanf("%s%d%d",op,&a,&b);
        if(*op=='M') p[find(a)]=find(b);//集合合并操作
        else
        if(find(a)==find(b))
        //如果祖宗节点一样,就输出yes
        printf("Yes\n");
        else
        printf("No\n");
    }
    return 0;
}
```

## 837、连通块中点的数量 
- 和836题目基本一样
- 加了Q2操作

对于每个询问指令 `Q1 a b`，如果 `a` 和 `b`

在同一个连通块中，则输出 `Yes`，否则输出 `No`。

对于每个询问指令 `Q2 a`，输出一个整数表示点 `a`
所在连通块中点的数量

**输入样例：**
```
5 5
C 1 2
Q1 1 2
Q2 1
C 2 5
Q2 5
```
**输出样例：**
```
Yes
2
3
```
**题解**
```c++
#include <iostream>

using namespace std;

const int N = 100010;

int n, m;
int p[N], cnt[N];

int find(int x)
{
    if (p[x] != x) p[x] = find(p[x]);
    return p[x];
}

int main()
{
    cin >> n >> m;

    for (int i = 1; i <= n; i ++ )
    {
        p[i] = i;
        cnt[i] = 1;
    }

    while (m -- )
    {
        string op;
        int a, b;
        cin >> op;

        if (op == "C")
        {
            cin >> a >> b;
            a = find(a), b = find(b);
            if (a != b)
            {
                p[a] = b;
                cnt[b] += cnt[a];
            }
        }
        else if (op == "Q1")
        {
            cin >> a >> b;
            if (find(a) == find(b)) puts("Yes");
            else puts("No");
        }
        else
        {
            cin >> a;
            cout << cnt[find(a)] << endl;
        }
    }
    return 0;
}
```