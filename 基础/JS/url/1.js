// https://协议
function parseParam(url){
    const paramStr = /.+\?(.+)$/.exec(url)[1];//转义？,+ 一次或多次匹配,$匹配到结束
    const paramsArr = paramStr.split('&');
    // console.log(paramsArr);
    let paramsObj = {}
    paramsArr.forEach(param =>{
        if(/=/.test(param)){
            let [key,val] = param.split('=');
            if(paramsObj.hasOwnProperty(key)){
                paramsObj[key] = [].concat(paramsObj[key],val)
            }else{
                val = decodeURIComponent(val);
                if(/^\d+$/.test(val)){
                    val = parseInt(val);
                }
                // console.log(key,val);
                paramsObj[key] = val;
            }
        }else{
            paramsObj[param] = true;
        }
    })
    return paramsObj;
}
let url = 'https://www.wc.com?a=1&b=2&c=3&d&b=4&name=杨仲鑫';
//解析URL 参数到一个对象中
console.log(parseParam(url));
//解析中文 encodeURI('杨仲鑫'); 我们在url中传中文的时候为了编码的安全性传输encodeURI('')之后的,接受的时候再解码decodeURIComponent(val)
//console.log(encodeURI('杨仲鑫'));//%E6%9D%A8%E4%BB%B2%E9%91%AB