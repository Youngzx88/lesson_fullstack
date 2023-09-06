# 为什么需要redis

- mysql 是通过硬盘来存储信息的，并且还要解析并执行 sql 语句，这些决定了它会成为性能瓶颈。
- 也就是说服务端执行计算会很快，但是等待数据库查询结果就很慢了。
- 计算机领域最经常考虑到的性能优化手段就是缓存了。能不能把结果缓存在内存中，下次只查内存就好了呢？
- 所以做后端服务的时候，我们不会只用 mysql，一般会结合内存数据库来做缓存，最常用的是 redis。
- 因为需求就是缓存不同类型的数据，所以 redis 的设计是 key、value 的键值对的形式。
- 并且值的类型有很多：字符串（string）、列表（list）、集合（set）、有序集合（sorted set）、哈希表（hash）、地理信息（geospatial）、位图（bitmap）等。
- redis 是分为服务端和客户端的，它提供了一个 redis-cli 的命令行客户端。服务端是 redis-server，客户端是 redis-cli。

# docker安装redis镜像并使用

- 映射端口，挂载文件
- 终端输入redis-cli进入交互模式
- 常用命令
  - SET
  - SETNX
  - GEX
  - MGET
  - INCRBY

```bash
127.0.0.1:6379> set name youngzx
OK
127.0.0.1:6379> get name
"youngzx"
# incr用于递增判断，计算阅读数，点赞数常用到这个
127.0.0.1:6379> incr age
(integer) 1
127.0.0.1:6379> get age
"1"
127.0.0.1:6379> incr age
(integer) 2
```

- list类型的数据结构
  - LPUSH:从左PUSH
  - LPOP:从右PUSH
  - LLEN：
  - LMOVE
  - LTRIM
  - LRANGE:查看list数据`LRANGE list1 0 -1`,代表从0查到尾,既查全部

```bash
lpush list1 111
lpush list1 222
lpush list1 333
```

- set类型的数据结构
  - 特点是无序列，去重
  - SADD
  - SREM
  - SISMENBER:判断集合是否含有某元素
  - SINTER
  - SCARD
  - 如果排序、去重的需求，比如排行榜，可以用 sorted set，也就是 zset
  - 通过 zrange 命令取数据，比如取排名前三的数据：`zrange zset1 0 2`

- hash类型的数据结构
  - HSET
  - HGET
  - HMGET
  - HINCRBY

  ```bash
  hset hash1 key1 1
  hset hash1 key2 2
  hset hash1 key3 3
  hset hash1 key4 4
  hset hash1 key5 5
  hget hash1 key3
  ```

- geo 的数据结构
  - `geoadd loc 13.361389 38.115556 "young" 15.087269 37.502669 "yu"`
  - redis 实际使用 zset 存储的，把经纬度转化为了二维平面的坐标：
  - 你可以用 geodist 计算两个坐标点的距离：`geodist loc young yu`

- 过期时间
  - `expire dogn1 30`
  - 查看过期时间用ttl

- 回到最开始的问题，我们完全可以查出数据来之后放到 redis 中缓存，下次如果 redis 有数据就直接用，没有的话就查数据库然后更新 redis 缓存。

- 这是 redis 的第一种用途，作为数据库的缓存，也是主要的用途。

- 第二种用途就是直接作为存储数据的地方了，因为 redis 本身是会做持久化的，也可以把数据直接保存在 redis 里，不存到 mysql。
