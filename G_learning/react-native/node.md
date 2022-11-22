- 用 expo 去新建一个项目：npx expo init//或者 npx create-expo-app
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
- Dimensions

  - 通过屏幕尺寸来调节组件大小,缺点：不能考虑屏幕旋转后(hooks 解决)

  ```js
  console.log(Dimensions.get('screen'))
  {"fontScale": 1, "height": 844, "scale": 3, "width": 390}
  ```

## 2. react-native/hooks

- 有很多别人写好的 hooks 库

  ```shell
  npm install @react-native-community/hooks
  ```

- 动态控制宽高 useDeviceOrientation,动态判断设备宽度 useDimensions

  ```js
  const orientation = useDeviceOrientation() //用它动态进行高度计算
  <View style={{ backgroundColor: 'red', width: "50%", height: orientation.portrait == true ? 100 : 50 }}>
    <Text>hekki</Text>
  </View>
  ```

## 3. 样式

- 封装 color
- 封装组件，让同一类型的组件字体，颜色一致(因为 react-native 当中没有继承的概念)
- 图标： `import { MaterialCommunityIcons } from '@expo/vector-icons'`,`<MaterialCommunityIcons name="email" />`
  - 在这里找到 expo 中所有的失量图标`https://icons.expo.fyi/`
- 分离平台

  - platform：`fontFamily: Platform.OS == "android" ? "Robot" : "Avenir"`
  - Platform.select({}),会返回一个对象，需要在样式中解构

- 跑通代码`react-native-paper`npm i react-native-reanimated

## 4. 路由

- react-navigation

1. `npm install @react-navigation/native-stack`
2.

- CreateNativeStackNavigator 是一个函数，它返回一个包含两个属性的对象: Screen 和 Navigator。它们都是用于配置导航器的 React 组件。Navigator 应该包含 Screen 元素作为其子元素，以定义路由的配置。

```js
function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  )
}

const Stack = createNativeStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
```

3. 路由跳转

- 默认跳转

```jsx
<Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
```

- 带返回的跳转

```js
<Button
  title="Go to Details... again"
  onPress={() => navigation.push('Details')}
/>
```

4. 路由传参

```js
//home页面传递参数
<Button
  title="Go to Details"
  onPress={() => {
    /* 1. Navigate to the Details route with params */
    navigation.navigate('Details', {
      itemId: 86,
      otherParam: 'anything you want here',
    })
  }}
/>
//detail页面接收参数
function DetailsScreen({ route, navigation }) {
  /* 2. Get the param */
  const { itemId, otherParam } = route.params;
  ...
}

```

5. 更新参数

```js
navigation.setParams({
  query: 'someText',
})
```

6. 导航器嵌套

```js
function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Messages" component={Messages} />
    </Tab.Navigator>
  )
}
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
```
