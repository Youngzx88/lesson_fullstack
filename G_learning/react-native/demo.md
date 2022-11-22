- "react-native": "0.70.5",
- npm install react-native-paper@5.0.0-rc.10
- npm install --save react-native-vector-icons
- App -> Navigation -> NavigationContainer -> RootNavigator ->

```jsx
<Stack.Navigator>
  <Stack.Screen
    name="Root"
    component={BottomTabNavigator}
    options={{ headerShown: false }}
  />
  <Stack.Screen
    name="NotFound"
    component={NotFoundScreen}
    options={{ title: 'Oops!' }}
  />
  <Stack.Group screenOptions={{ presentation: 'modal' }}>
    <Stack.Screen name="Modal" component={ModalScreen} />
  </Stack.Group>
</Stack.Navigator>
```

- 网路请求 axios

```jsx
const [demoNumber, setDemoNumber] = useState({})
const init = async () => {
  const res = await CommonApi.getIndex()
  setDemoNumber(res.data)
  return res.data
}
useEffect(() => {
  init()
}, [])
console.log('demoNumber', demoNumber)
```
