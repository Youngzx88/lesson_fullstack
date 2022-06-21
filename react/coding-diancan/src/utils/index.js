/**
 * @author yzx
 * @func 根据path 判断是否在数组配置中
 * @params {path string}
 * @return boolean
 */
 export const isPathPartlyExisted = (path) => {
    // 1. path 全部匹配 / cities
    // 2. path 多了 / hoemdetail /: id/comments/:id
        // const arr = ['/cities', '/homedetail'];
        // if (arr.indexOf(path) != -1) return true
    // 部分匹配
        // if (path.lastIndexOf('/') !== 0) {
        //     const reg = /^(\/[\w]+)\//;
        //     const matchArr = path.match(reg)
        //     const partlyPath = matchArr[1] ? matchArr[1] : ''
        //     if (partlyPath) return arr.indexOf(partlyPath) != -1

        // }
    
    // 3. 更优秀的版本split
    const arr = ['/cities', '/homedetail'];
    //任何情况,结果数组第二项都是arr里匹配到淡香
    let pathRes = path.split('/')
    if(pathRes[1] && arr.indexOf(`/${pathRes[1]}`)!=-1) return true
    return false
}