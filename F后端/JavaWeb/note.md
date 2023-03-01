# Java Web

## 1、基本知识

- 技术栈：servlet/jsp，ASP，PHP

- 请求经过servlet/jsp返回给server，返回给前端界面

- servlet通过配置文件拦截你的请求，并进行相应处理，然后展示给你相应界面，那么servlet如何创建？ 这时候tomcat用到了，

- 它就是帮助你创建servlet的东西，所以也称web容器，没有它，没法运行web项目。相对应的web容器有很多，Servlet容器应该有三个基本任务：创建Request对象、创建Response对象和Servlet处理请求响应

- 技术历程：ASP->PHP->JSP/Servlet

- web服务器：tomcat，IIS

## 2、tomcat

- 中的webapps存放网站
- 启动./startup.bat
- 访问localhost:8080
![alt](./tomcat.png)

## 3、http

- http：超文本传输协议，简单的请求响应
  - http：1.0:客户端与服务端连接只能获得一个资源
  - http：1.1：客户端与服务端连接可以获得多个资源
- https：安全

## 4、maven

- javaweb中需要导入大量jar包
- 但是我们不希望手动倒入jar包
- 由此maven诞生了
- 配置maven阿里云景象
- 配置本地仓库
- 如果创建webapp以后没有webapp文件怎么办？
  - 右键add framework，选择web application
  - 右键新建文件 src/main/java,src/main/resources
- build中配置resources防止资源导出失败

## 5、idea配置tomcat

- edit configuration
- 新建artifact，war包
- 其实 Artifact 是maven中的一个概念，表示某个module要如何打包。一个web项目中有多个模块，不懂的就先当这个module是个web项目即可。例如war、war exploded、jar、ear等这些打包形式；一个module有了 Artifacts 就可以部署到应用服务器中了！
- application context可以写，可以不写，相当于localhost/下面的内容
- 项目打包方式：jar，war

## 6、servlet

- 动态web的一种技术
- Sun公司在这些api中提供一个接口叫做servlet，如果想开发一个servlet仅仅需要两个步骤
  - 编写一个类，实现servlet接口
  - 开发好的java类部署到web服务器当中
  - 把实现了servlet接口的程序叫servlet
- 第一个servlet程序
  - 构建一个普通的maven项目，删掉src，学习的时候就建module去学习
- Servlet接口有两个默认的实现类：httpservlet,GenericServlet

```java
public class helloServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        PrintWriter writer = resp.getWriter();
        writer.print("sdad");
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req,resp   );
    }
} 
```

- 编写servlet映射
  - 为什么需要映射？ 我们写的是java程序，但是要通过浏览器访问，而浏览器需要连接web服务器，所以我们要在web服务中注册我们写的servket，还需要给他一个浏览器能够访问的路径
  - mapping（web.xml）

- 配置tomcat

- 启动测试

## 7、servlet原理

![alt](./servlet%E5%8E%9F%E7%90%86.png  )

- servlet和tomcat的关系：Tomcat 是Web应用服务器,是一个Servlet/JSP容器. Tomcat 作为Servlet容器,负责处理客户请求,把请求传送给Servlet,并将Servlet的响应传送回给客户.而Servlet是一种运行在支持Java语言的服务器上的组件. Servlet最常见的用途是扩展Java Web服务器功能,提供非常安全的,可移植的,易于使用的CGI替代品.

- war 包是Sun 提出的一种web 应用程序格式。 它与jar 类似，是很多文件的压缩包。 war 包中的文件按照一定目录结构来组织。 一般其根目录下包含有html 和jsp 文件，或者包含有这两种文件的目录，另外还有WEB-INF 目录。

## 8、servlet context对象

- web容器在启动的时候会为每一个web程序创建一个对应的servletContext对象，它代表了当前的web应用
- 凌驾于每个servlet之上，做一些servlet之间信息交互的功能
- 设置响应文本不乱码

```java
resp.setContentType("text/html");
resp.setCharacterEncoding("utf-8")
resp.getWrite().print("名字"+username)
```

## 9、web info中配置初始化参数

- 在webinfo中配置

```xml
<content-param>
  <param-name>url</param-name>
  <param-value>jdbc:mysql://localhost:3306/mybatis</param-value>
</content-param>
```

- 在servlet中调用

```java
String url = context.getInitParameter("url")
```

## 10、Cookie，Session

## 11、jsp原理

- jsp页面中潜逃JAVA代码，为用户提供动态数据
- jsp本质上就是一个servlet
- jsp代码中，java代码会被原封不动的输出，html代码会转化为out.print()

## 12、jsp基础语法/指令

- 变量/表达式

```jsp
<html>
<body>
<h2>Hello World!</h2>
<div><%= new java.util.Date()%></div>
</body>
</html>
```

- jsp脚本片段

```jsp
<%
  int sum = 0;
  for(int i = 1; i <= 100; i++){
    sum+=i;
    out.println("<h1>Sum+="+sum+"</h1>")
  }
%>
```

- jsp全局

```jsp
<%!
  static {
    System.out.println("loading Servlet")
  }
  private int globalVar = 0;
  public void getGlobal(){
    System.out.println("get"+globalVar);
  }
%>
```

- 自定义page

```jsp
<% page errorPage="error/500.jsp"%>
```

- 自定义header

```jsp
<%@include file="common/header.jsp"%>
```

## 13、9大内置对象

- PageContext存东西:setAttribute("key","value")->保存的只在一个页面中有效
- Request存东西:setAttribute("key","value")->保存的在一次请求中有效
- Response
- Session存东西:setAttribute("key","value")->保存的在session中有效
- Application(ServletContext)存东西:setAttribute("key","value")->保存的在服务器中有效
- config
- page
- exception

## 14、jsp/jstl

-
