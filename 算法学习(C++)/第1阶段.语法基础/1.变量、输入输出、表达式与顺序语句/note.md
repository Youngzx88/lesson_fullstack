## 1.两点之间的距离

给定两个点P和F，其中P的坐标为(x1, y1)，P的坐标为(x2, y2)，请你计算两点间的距离是多少？

- distance = √(x2— x1)^2+(y2-y2)^2

**输入格式**
输入共两行，每行包含两个双精度浮点数,J，表示其中一个点的坐标。
输入数值均保留—位小数。

**输出格式**
输出你的结果，保留四位小数。

**数据范围**
—10^9 ≤xi,yi≤10^9

**输入样例:**
1.0 7.0
5.0 9.0

**输出样例:**
4.4721

**AC代码**
```c++
#include<cstdio>
#include <cmath>
using namespace std;
int main(){
    double x1,y1,x2,y2;
    double distance;
    scanf("%lf%lf", &x1, &y1);
    scanf("%lf%lf", &x2, &y2);
    double res;
    res=sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1));
    printf("%.4lf",res);
}
```

总结
- 如果是需要保留小数位数的最好用printf,需要引入头文件#include< cstdio >
- 涉及到浮点数计算最好用double,float可能精度不够