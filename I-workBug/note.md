# workBug
- react中form表单post请求
- ajax的不同使用场景
- decodeUrlComponent解码问题
- zustand常用逻辑
- actions的先后顺序问题
- 所有useEffect，useDidShow写一个就好
- queryString拿到url上的参数
- 倒计时use-timer
- 多环境
- 固定高度要用大写的PX，但是尽量用rpx因为是响应式
- 响应式切图
  - pc直接切img ➕ 绝对定位 text
  - mobile img display：none，用text撑开文本，用img当作text的背景图
- 官网响应式切图
原理
  - pc端用img撑开div，文字绝对定位
  - mobile端用img当作background-image(cover)，用文字撑开div  
  ```html
  <div className='relative w-full'>
      <img className='hidden lg:w-full lg:block' src="https://www.magelesi.cn/assests/brandStory/1-%E5%85%AC%E5%8F%B8%E6%84%BF%E6%99%AF%402x-tuya.jpg" alt="" />
      <div className="bgImage bg-cover w-full">
        <div className='lg:mx-auto lg:absolute w-full lg:top-0 lg:left-0'>
          <div className="container mx-auto w-full">
            <div className='lg:pt-[10vw] p-20'>
              <div className='mx-auto text-[12px] lg:text-[22px] lg:mx-auto lg:w-30'><img src="https://www.magelesi.cn/assests/brandStory/%E7%BB%84%202.png" alt="" /></div>
              <div className="mx-auto opacity-[0.7] text-white text-[12px] lg:text-[22px] lg:text-white lg:opacity-[0.7] lg:mx-auto lg:w-30">我们秉承着建立低碳、绿色、健康、舒适的人类环境的理念，以纳米材料为核心，结合芯片技术，将在技术和市场上不断创新发展；坚持以客户为中心，持续为客户创造长期价值，相互成就，共享未来。</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ```
  ```css
  .bgImage {
    background-image: url(https://www.magelesi.cn/assests/brandStory/honor%402x-tuya.jpg);
    background-position: center
  }
  ```