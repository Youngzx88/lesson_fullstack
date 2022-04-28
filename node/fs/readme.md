- 读取文件fs api
拥有两种代码风格
1. 同步写法
2. 异步写法

- 查找指定目录下最大文件的大小
    1. api获得目录下的内容? readdir
    2. let maxSize = 0; 循环遍历 fs.stat 获取详细信息