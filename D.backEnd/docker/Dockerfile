FROM node:latest

WORKDIR /app

COPY . .

RUN npm config set registry https://registry.npmmirror.com/

RUN npm install -g http-server

EXPOSE 8080

CMD ["http-server", "-p", "8080"]

# FROM：基于一个基础镜像来修改
# WORKDIR：指定当前工作目录
# COPY：把容器外的内容复制到容器内
# EXPOSE：声明当前容器要访问的网络端口，比如这里起服务会用到 8080
# RUN：在容器内执行命令
# CMD：容器启动的时候执行的命令
