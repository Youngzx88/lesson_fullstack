- 用 expo 去新建一个项目：npx expo init
- 想要打包出一个安装包要用 react-native，expo 是实验性质的
- 学习在 chorme 中调试 和 在 vscode 中调试:需要修改 vscode 端口号为 web 端口一样的 19000
- 发布不了 expo publish
- 解决全局安装失败的问题

## 1. 开始组件的学习

- View
  - 用 safeAreaView 代替 View 确保他不会被刘海或者下方线条挡住
- Text
  - 类似 p
- Image
  ```js
  <View>
    <Image
      source={{
        width: 200,
        height: 300,
        uri: 'https://picsum.photos/200/300',
      }}></Image>
  </View>
  ```
- TouchableWithoutFeedback,TouchableOpacity,TouchableHighLight（仅 ios）
  - 解决 Image 没有 onPresss 属性的问题
- Button
- Alert

  - 自定义 alert

  ```js
  <Button color="orange" title="click me" onPress={() => Alert.alert("alert title", "alert content", [
        { text: "yes", onPress: console.log("yes") },
        { text: "no", onPress: console.log("no") }
      ])} />

  <Button color="orange" title="click me" onPress={() => Alert.prompt("alert title", "alert content", text => console.log(text))} />
  ```

- Platform
  - 因为 SafeAreaView 仅仅对 ios 生效，所以我们需要根据平台判断安卓设备，给他增添一个 padding
  - 正确的做法是设置 StatusBar 的 height，因为不同设备状态栏的高度不一样
  ```js
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'dodgerblue',
      alignItems: 'center',
      justifyContent: 'center',
      PaddingTop: Platform.OS === 'android' ? StatusBar.height : 0,
    },
  })
  ```
