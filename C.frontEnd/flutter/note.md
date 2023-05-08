# flutter

## 1、是什么？

- 是一款跨端开发框架
- SDK是什么Flutter SDK 是用于开发 Flutter 应用程序的软件开发工具包。它包含了开发 Flutter 应用所需的各种工具、库和框架，例如 Flutter 引擎、Dart 编程语言、Flutter 组件库和开发工具等。Flutter SDK 可以安装在各种操作系统上，如 Windows、macOS 和 Linux，并且可以与各种开发环境和编辑器配合使用，例如 Android Studio、Visual Studio Code 和 IntelliJ IDEA 等。Flutter SDK 中的重要组件包括：Flutter 引擎，Dart 编程语言，Flutter 组件库，开发工具

## 2、开始

- flutter create my_app
- cd my_app
- flutter run

## 3、ios && android

- ios
  - 按照下面 Xcode 签名流程来配置你的项目:
  - 通过在命令行中于你当前 Flutter 项目目录下运行 open ios/Runner.xcworkspace 命令来打开默认的 Xcode 工程。
  - 在运行按钮的下拉列表里选择你想要部署到的设备；
  - 在左侧的导航面板中选择 Runner 项目；
  - 在 Runner 项目的设置页面，请确保勾选你的开发团队。在不同的 Xcode 版本里，这一部分的操作界面不同：
  - 当选择了一个团队之后，Xcode 会创建和下载一个开发证书，并在你的账户里为你的设备注册，并在需要的时候创建和下载一个配置文件。
  - 在开始你的第一个 iOS 项目开发之前，你需要先在 Xcode 中登陆你的 Apple 开发者账号 Xcode account add 任何 Apple ID 都可以进行开发和测试。如果想将应用上架 App Store，你需要加入 Apple Developer Program，你可以在 Choosing a Membership 页面中查看详细的说明。
  - 如果 Xcode 的自动签名失败了，你可以检查以下项目中 General > Identity > Bundle Identifier 里的值是否是唯一的。
  - 随后执行flutter run / 在xcode中点击运行

- android
  - 下载安卓死丢丢
  - 安装dart插件和flutter插件
  - 下载模拟器
  - 安装system image
    - 安卓开发中的 system image 是一个包含操作系统核心、系统服务、应用程序等组件的镜像文件。它是一个 Android 系统的完整副本，可以被部署到 Android 设备上运行。
    - 系统镜像是 Android 应用程序开发的重要组成部分，它为应用程序提供了访问系统级功能和服务的接口。开发者可以使用 Android SDK 工具来构建和定制自己的系统镜像，以便将其部署到模拟器、真实设备或其他 Android 平台上。
  - run

- 平时你开了哪个模拟器flutter run就会走哪一个模拟器

## 4、项目结构分析

- .idea:安卓死丢丢配置文件
- android，ios:编写完代码后会自动merge对应代码
- build:打包
- lib:99%时间去操作的文件
- test:做测试的
- pubspec.yaml:依赖(严格遵守缩进)
