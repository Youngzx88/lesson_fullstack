try {
  var a = "0x112";
  console.log("1")
  if(a === "0x112"){
    throw '代码错误'
  }
  console.log(a)
} catch (error) {
  console.log(error)
} finally {
  console.log("接下来的代码")
}