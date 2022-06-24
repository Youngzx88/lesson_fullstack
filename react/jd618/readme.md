1. 组件思维清晰

2. api封装

3. 做了css reset font

4. 组件文件名可以多个单词，多个单词用横杠,-,组件名用驼峰命名

5. 子组件高效结构数据，有利于提速

6. swiper放到 `components/common/` 通用组件

7. antd-mobile 有些可以用的组件 
    - swiper

8. /public 
    - 根目录下，静态资源目录，不需要在src里面引入
    - logo adapter.js
    - 直接访问到/public
    - adapter.js引入时，很干脆，head，script