/**
 * @author yzx
 * @func 根据path 判断是否在数组配置中
 * @params {path string}
 * @return boolean
 */
 export const isPathPartlyExisted = (path) => {
    // 1. path 全部匹配 / cities
    // 2. path 多了 / hoemdetail /: id/comments/:id
    const arr = ['/cities', '/homedetail'];
    if (arr.indexOf(path) != -1) return true
    // 部分匹配
    if (path.lastIndexOf('/') !== 0) {
        const reg = /^(\/[\w]+)\//;
        const matchArr = path.match(reg)
        const partlyPath = matchArr[1] ? matchArr[1] : ''
        if (partlyPath) return arr.indexOf(partlyPath) != -1

    }
    return false

    // arr.forEach(item => {
    //     if (item === path) {
    //         return true
    //     }
    //     if (path.lastIndexOf('/') !== 0) {
    //         // 正则 path 的第二个/ 前面的部分
    //         //  / 转译：\/
    //         // [\w] 一个字符
    //         // [\w+] 一个或多个
    //         const reg = /^(\/[\w]+)\//;
    //         // console.log(path.match(reg))
    //         const matchArr = path.match(reg)
    //         const partlyPath = matchArr[1] ? matchArr[1] : ''
    //         if (partlyPath) return partlyPath === item;
    //     }
    //     return false
    // })
}