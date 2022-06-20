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
}