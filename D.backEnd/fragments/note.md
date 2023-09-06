# 1、两种登录状态保存方式:JWT、Session

- http是无状态的怎么实现登录状态的保存？

## 1.1、服务端存储的 session + cookie

- 给 http 添加状态，那就给每个请求打上个标记，然后在服务端存储这个标记对应的数据。这样每个被标记的请求都可以找到对应的数据，自然可以做到登录、权限等状态的存储。
- 这个标记应该是自动带上的，所以 http 设计了 cookie 的机制，在里面存储的数据是每次请求都会带上的。
- 然后根据 cookie 里的标记去查找的服务端对应的数据叫做 session，这个标记就是 session 的 id。
- 简单来说就是每次请求cookie都带上sid=1，然后去服务器找到session中id为1的

## 1.2、session + cookie 的问题

- CSRF
  - cookie会在请求自动带上，如果B网站有个按钮能请求A网站的URL，那么A网站的cookie会被带过去，这样A网站就可能被攻击
  - 为了解决这个问题，我们一般会验证 referer，就是请求是哪个网站发起的，如果发起请求的网站不对，那就阻止掉。
  - 但这样依然不能完全解决问题，万一你用的浏览器也是有问题的，能伪造 referer ？
  - 所以一般会用随机值来解决，每次随机生成一个值返回，后面再发起的请求需要包含这个值才行，否则就认为是非法的。
  - 这个随机值叫做 token，可以放在参数中，也可以放在 header 中，因为钓鱼网站拿不到这个随机值，就算带了 cookie 也没发通过服务端的验证。
  - 这是 session + cookie 这种方案的一个缺点，但是是有解决方案的。
- 分布式缺陷
  - session 是把状态数据保存在服务端，那么问题来了，如果有多台服务器呢？
  - 当并发量上去了，单台服务器根本承受不了，自然需要做集群，也就需要多台服务器来提供服务。
  - 而且现在后端还会把不同的功能拆分到不同的服务中，也就是微服务架构，自然也需要多台服务器。
  - 解决方案：session复制，session保存到redis
- 跨域
  - cookie 为了安全，是做了 domain 的限制的，设置 cookie 的时候会指定一个 domain，只有这个 domain 的请求才会带上这个 cookie。
  - 那万一是不同 domain 的请求呢？也就是跨域的时候，怎么带 cookie 呢？
  - a.xxx.com 和 b.xxx.com 这种还好，只要把 domain 设置为顶级域名 xxx.com 就可以了，那二三级域名不同也能自动带上。
  - 但如果顶级域名也不同就没办法了，这种只能在服务端做下中转，把这俩个域名统一成同一个。
  - 上面说的不是 ajax 请求，ajax 请求有额外的机制：
  - ajax 请求跨域的时候是不会挟带 cookie 的，除非手动设置 withCredentials 为 true 才可以。

  ```js
  Access-Control-Allow-Origin: "当前域名";
  Access-Control-Allow-Credentials: true
  ```

## 1.3、客户端存储的 token

- 既然这样的方案有那么多的问题，那我反其道而行之，不把状态保存在服务端了，直接全部放在请求里，也不放在 cookie 里了，而是放在 header 里，这样是不是就能解决那一堆问题了呢？
- token 的方案常用 json 格式来保存，叫做 json web token，简称 JWT。
- JWT是由header、payload、verify signature 三部分组成的
- header 部分保存当前的加密算法，payload 部分是具体存储的数据，verify signature 部分是把 header 和 payload 还有 salt 做一次加密之后生成的。（salt，盐，就是一段任意的字符串，增加随机性）
- 这三部分会分别做 Base64，然后连在一起就是 JWT 的 header，放到某个 header 比如 authorization 中：`authorization: Bearer xxxxx.xxxxx.xxxx`
- 请求的时候把这个 header 带上，服务端就可以解析出对应的 header、payload、verify signature 这三部分，然后根据 header 里的算法也对 header、payload 加上 salt 做一次加密，如果得出的结果和 verify signature 一样，就接受这个 token。

## 1.4、JWT的问题

- 因为 JWT 把数据直接 Base64 之后就放在了 header 里，那别人就可以轻易从中拿到状态数据，比如用户名等敏感信息，也能根据这个 JWT 去伪造请求。
- 所以 JWT 要搭配 https 来用，让别人拿不到 header。
- JWT 把状态数据都保存在了 header 里，每次请求都会带上，比起只保存个 id 的 cookie 来说，请求的内容变多了，性能也会差一些。
- 所以 JWT 里也不要保存太多数据。
- session 因为是存在服务端的，那我们就可以随时让它失效，而 JWT 不是，因为是保存在客户端，那我们是没法手动让他失效的。
  - 比如踢人、退出登录、改完密码下线这种功能就没法实现。
  - 但也可以配合 redis 来解决，记录下每个 token 对应的生效状态，每次先去 redis 查下 jwt 是否是可用的，这样就可以让 jwt 失效。
