# 1、HTTP
## 1.1、请求报文
- 行 POST  /s?ie=utf-8  HTTP/1.1
- 头 
  - Host: xsad.com
  - Cookie: name = xsad
  - Content-type: application/x-www-form-urlencoded
  - User-Agent: chrome 83
- 空行 
- 体 username = admin&password=admin
## 1.2、相应报文
- 行 HTTP/1.1 200 OK
- 头
  - Content-Type：text/html; charset=utf-8
  - Content-length...
  - Content-encodeing...
- 体
  - 返回html格式
## 1.3、实操
- 请求头
- 相应头
- 相应体

## 1.4、区分请求头中的host，origin，referer
1. Host
描述请求将被发送的目的地，包括，且仅仅包括域名和端口号。
 在任何类型请求中，request都会包含此header信息。

2. Origin
用来说明请求从哪里发起的，包括，且仅仅包括协议和域名。
 这个参数一般只存在于CORS跨域请求中，可以看到response有对应的header：Access-Control-Allow-Origin。

3. Referer
告知服务器请求的原始资源的URI，其用于所有类型的请求，并且包括：协议+域名+查询参数（注意，不包含锚点信息）。

