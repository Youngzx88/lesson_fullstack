# expo relate

## 1. 开发多端app

## 2. npx create-expo-app my project name

## 3. 安装必要的库(减少冷更新次数)

- npx expo install expo-image-picker：从设备的媒体库中选择图像
- npx expo install react-native-gesture-handler react-native-reanimated：React Native Gesture Handler 库提供了一种与本机平台的手势响应系统交互的方法。为了在手势状态之间进行动画处理，我们将使用Reanimated 库。(<https://docs.expo.dev/tutorial/gestures/>)
- npx expo install react-native-view-shot expo-media-library:允许访问设备的媒体库以保存图像的库。
- npx expo install react-native-svg：让非浏览器设备也能识别svg
- npx expo install @expo/vector-icons：图标库
- npm install @react-navigation/native @react-navigation/native-stack：路由库
  - npx expo install react-native-screens react-native-safe-area-context
- UI组件库：（<https://docs.expo.dev/ui-programming/user-interface-libraries/）>
