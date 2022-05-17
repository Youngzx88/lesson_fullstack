# DFS
- 深度优先搜索

## 842、排列数字
给定一个整数 n，将数字 1∼n排成一排，将会有很多种排列方法。现在，请你按照字典序将所有的排列方法输出。
**输入格式**
共一行，包含一个整数 n
**输出格式**
按字典序输出所有排列方案，每个方案占一行。
**数据范围**
1≤n≤7
**输入样例：**
3
**输出样例：**
1 2 3
1 3 2
2 1 3
2 3 1
3 1 2
3 2 1
**题解**
```c++
#include <iostream>
using namespace std;
const int N = 10;
int n;
int p[N];
bool used[N];
void dfs(int u){
    if(u > n){
        for (int i = 1; i <= n; i ++ ) printf("%d ",p[i]);
        printf("\n");
        return ;
    }
    for(int j = 1 ; j <=n ;j ++){
        if(!used[j]){
            p[u] = j;
            used[j] = true;
            dfs(u+1);
            //返回递归,要恢复原状
            p[u] = 0; 
            used[j] = false;
        }
    }
}
int main(){
    cin>>n;
    dfs(1);
    return 0;
}
```

## 843、n-皇后问题 
n−皇后问题是指将 n 个皇后放在 n×n 的国际象棋棋盘上，使得皇后不能相互攻击到，即任意两个皇后都不能处于同一行、同一列或同一斜线上。
现在给定整数 n，请你输出所有的满足条件的棋子摆法。
**输入格式**
共一行，包含整数 n。
**输出格式**
每个解决方案占 n 行，每行输出一个长度为 `n`的字符串，用来表示完整的棋盘状态。其中 . 表示某一个位置的方格状态为空，`Q` 表示某一个位置的方格上摆着皇后。每个方案输出完成后，输出一个空行。
**数据范围**
1≤n≤9
**输入样例：**
4
**输出样例：**
.Q..
...Q
Q...
..Q.

..Q.
Q...
...Q
.Q..

**题解1**
```c++
//按行枚举，每行皇后应该放在哪
#include <iostream>

using namespace std;

const int N = 20;

int n;
char g[N][N];
//按行枚举不需要row数组，每行只能放一个皇后
//有多少行就有 2n-1行对角线
bool col[N], dg[N], udg[N];

void dfs(int u)
{
    if (u == n)
    {
        for (int i = 0; i < n; i ++ ) puts(g[i]);
        puts("");
        return;
    }

    for (int i = 0; i < n; i ++ )
        //这里有个问题就是知道当前位置【u,i】,怎么映射对角线？
        //y=x+b => b = y - x （y-x有可能为负数，所以要加个n取正）
        //y=-x+b => b = y + x
        if (!col[i] && !dg[u + i] && !udg[n - u + i])
        {
            g[u][i] = 'Q';
            col[i] = dg[u + i] = udg[n - u + i] = true;
            dfs(u + 1);
            col[i] = dg[u + i] = udg[n - u + i] = false;
            g[u][i] = '.';
        }
}

int main()
{
    cin >> n;
    for (int i = 0; i < n; i ++ )
        for (int j = 0; j < n; j ++ )
            g[i][j] = '.';

    dfs(0);

    return 0;
}
```
**题解2**
```c++

```