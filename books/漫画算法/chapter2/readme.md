# 数据结构基础

### 1、数组
> 读取

> 更新

> 插入

- 不能动态增加容量的插入
```c++
#include <iostream>
using namespace std;
int array[10];
int SIZE=0;
void output(int arr[],int length){
    for(int i=0;i<length;i++){
        cout<<arr[i]<<" ";
    }
}
int insert(int arr[],int index,int element,int length){
    if(index<0 || index>length){
        cout<<"数据错误";
        return 0;
    }
    for(int i=length-1;i>=index;i--){
        arr[i+1]=arr[i];
    }    
    arr[index]=element;
    SIZE++;
    return 1;
}
int main(){
    for(int i=0;i<10;i++){
        array[i]=0;
    } 
    insert(array,0,20,SIZE);
    insert(array,1,30,SIZE);
    insert(array,2,40,SIZE);
    insert(array,3,50,SIZE);
    insert(array,4,60,SIZE);
    insert(array,0,99,SIZE);
    output(array,SIZE);
}
```
- 动态增加容量的插入
    
    增加一个resize函数,每次超过原本数组长度就resize()一次并把旧数组的值赋值给新数组

> 删除

### 2、链表


