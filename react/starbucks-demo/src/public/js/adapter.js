var init = function () {
  var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
  if (clientWidth >= 640) {
    clientWidth = 640;
  }
  var fontSize = 20 / 375 * clientWidth;
  document.documentElement.style.fontSize = fontSize + "px";
}

init();

window.addEventListener("resize", init);

// 第一点：手机像素
// 手机像素是逻辑像素也就是pt，1pt等于2px

// 第二点：物理像素
// 设计稿普遍给的都是物理像素，也就是px

// 第三点：为什么不给pt像素呢
// 因为css像素普遍使用率最高就是px像素，苹果手机屏幕为二倍高清屏，显示更为清晰

// 第四点：为什么没有比750还大的设计稿呢
// 因为人类的视觉分辨最大就是750，给在大的设计稿在手机上你也看不出区别，750是人类最为舒适的

// 第五点：手机屏幕为375要给750的设计稿
// 因为给俩倍的设计稿显示会更为清晰，超过俩倍人类在手机视觉上也看不出区别，给三倍就已经超过人类视觉的极限了
