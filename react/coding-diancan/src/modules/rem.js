/*
 * @Date         : 2022-06-16 21:03:15
 * @LastEditors  : colinlala
 * @LastEditTime : 2022-06-16 21:12:08
 * @description  : 自适应字体大小
 */
document.documentElement.style.fontSize =
    document.documentElement.clientWidth / 3.75 + "px"

// 自适应 横竖屏
window.onresize = function () {
    document.documentElement.style.fontSize =
        document.documentElement.clientWidth / 3.75 + "px"
}