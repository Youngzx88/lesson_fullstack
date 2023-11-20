import React, { useEffect } from 'react'
export default function index() {
  return (
    <div className="flex w-full h-full" id="visPdf">
      {/* 左侧 */}
      <div className="w-[32%] min-h-[32%] flex flex-col">
        <div className="w-[100%] min-h-[30%] h-[30%] bg-[#EFEFEF] flex justify-center items-center">
          <div className="w-[48%] h-[75%] bg-[red]"></div>
        </div>
        <div className="w-full min-h-[5%] h-[5%] bg-[#F5E24C]" />
        <div className="w-full flex-1 box-border bg-[#17426D] flex justify-start items-center flex-col py-6">
          <div className="text-[#fff] mt-4 font-bold">基本信息 Basic</div>
          <div className="text-[#fff] text-xs w-full flex flex-col justify-start items-center px-4 py-4">
            <div className="mt-2 font-sm w-full lg:w-[90%] xl:w-[70%]">
              院校：东华理工大学
            </div>
            <div className="mt-2 font-sm w-full lg:w-[90%] xl:w-[70%]">
              专业：软件工程
            </div>
            <div className="mt-2 font-sm w-full lg:w-[90%] xl:w-[70%]">
              学历：本科
            </div>
            <div className="mt-2 font-sm w-full lg:w-[90%] xl:w-[70%]">
              学年：2018.09 - 2022.06
            </div>
            <div className="mt-2 font-sm w-full lg:w-[90%] xl:w-[70%]">
              籍贯：江西 南昌
            </div>
          </div>

          <div className="text-[#fff]  mt-4 font-bold">联系方式 contact</div>
          <div className="text-[#fff] text-xs w-full flex flex-col justify-start items-center px-4 py-4">
            <div className="mt-2 font-sm w-full lg:w-[90%] xl:w-[70%]">
              电话：15979091733
            </div>
            <div className="mt-2 font-xs w-full lg:w-[90%] xl:w-[70%]">
              邮箱：1216238955@qq.com
            </div>
          </div>
        </div>
      </div>
      {/* 内容 */}
      <div className="p-3">
        {/* 简历简介 */}
        <div className="w-full flex flex-col justify-start items-start">
          <div className="font-extrabold text-2xl text-[#1F435F] text-left">
            朱x涛
          </div>
          <div className="font-bold mt-2 text-lg text-[#1F435F] text-left">
            算法工程师
          </div>
          <div className="mt-4 text-sm">
            投身开源，xxx 库作者，xxx 开源组织负责人，github blog 9999+
            star，具备良好语言表达能力和沟通能力，能快速融入团队，适应新环境。，具有代码洁癖。
          </div>
        </div>
        <div className="listData">
          {/* <Skill /> 技能证书 */}
          <div className="w-full flex flex-col justify-start items-start mt-4">
            <div id="skillTitle" className="font-bold text-base text-[#1F435F]">
              技能证书 Skill
            </div>
            <div className="text-sm mt-1 text-[#41566e] font-medium">
              · 熟悉xxx技术，阅读过xxx源码，熟悉xxx技术，阅读过xxx源码，熟悉xxx技术，阅读过xxx源码，熟悉xxx技术，阅读过xxx源码
            </div>
            <div className="text-sm mt-1 text-[#41566e] font-medium">
              · 熟悉xxx技术，阅读过xxx源码，熟悉xxx技术，阅读过xxx源码，熟悉xxx技术，阅读过xxx源码
            </div>
            <div className="text-sm mt-1 text-[#41566e] font-medium">
              · 熟悉xxx技术，阅读过xxx源码，熟悉xxx技术，阅读过xxx源码，熟悉xxx技术，阅读过xxx源码，熟悉xxx技术
            </div>
          </div>
          {/* <Project /> 项目经历 */}
          <div className="w-full flex flex-col justify-start items-start mt-4">
            <div id="skillTitle" className="font-bold text-base text-[#1F435F]">
              项目经历 Project
            </div>
            <div className="text-sm mt-2 text-[#41566e] font-medium">
              2018.09 - 2022.06 yolo源码开发!
            </div>
            <div className="text-sm mt-1">· 熟悉xxx技术，阅读过xxx源码，阅读过xxx源码，阅读过xxx源码，阅读过xxx源码</div>
            <div className="text-sm mt-1">· 实现xxx源码</div>

            <div className="text-sm mt-2 text-[#41566e] font-medium">
              2018.09 - 2022.06 yolo源码开发!
            </div>
            <div className="text-sm mt-1">· 熟悉xxx技术，阅读过xxx源码</div>
            <div className="text-sm mt-1">· 实现xxx源码</div>
          </div>
          {/* <Work /> 工作经历 */}
          <div className="w-full flex flex-col justify-start items-start mt-4">
            <div id="skillTitle" className="font-bold text-base text-[#1F435F]">
              工作经历 Work
            </div>
            <div className="text-sm mt-2 text-[#41566e] font-medium">
              2018.09 - 2022.06 703Teams
            </div>
            <div className="text-sm mt-1">· 开发公务员，大厂架构师，研究生，废物</div>
            <div className="text-sm mt-1">· 开发公务员，大厂架构师，研究生，废物</div>
            <div className="text-sm mt-2 text-[#41566e] font-medium">
            2018.09 - 2022.06 703Teams
            </div>
            <div className="text-sm mt-1">· 开发公务员，大厂架构师，研究生，废物</div>
            <div className="text-sm mt-1">· 开发公务员，大厂架构师，研究生，废物</div>
          </div>
        </div>
      </div>
    </div>
  )
}
