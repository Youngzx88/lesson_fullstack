// node 版本 es6 晚 
const fetch = require("node-fetch"); // 在后端发送一个请求 rpc 调用 
// 搜索推荐
const URL_SUGGEST = "https://s.search.bilibili.com/main/suggest";
// 搜索推荐
const URL_HOTWROD = "https://s.search.bilibili.com/main/hotword";
// 搜索结果
const URL_SEARCH = "https://api.bilibili.com/x/web-interface/search/all/v2";

const fetchSuggest = (w) => {
    const params = [
        "func=suggest",
        "suggest_type=accurate",
        "sub_type=tag",
        "main_ver=v1",
        "bangumi_acc_num=3",
        "tag_num=10",
        "highlight=",
        `term=${w}`
    ];
    console.log(URL_SUGGEST + "?" + params.join("&"))
    return fetch(URL_SUGGEST + "?" + params.join("&"))
        .then(res => res.json())
        .then(json => json)
}

const fetchHotword = () => {
    return fetch(URL_HOTWROD)
        .then(res => res.json())
        .then(json => json)
}

const fetchSearchData = (keyword) => {
    const params = [
        "page=1",
        "pagesize=20",
        `keyword=${keyword}`
    ];

    console.log(URL_SEARCH + "?" + params.join("&"))
    return fetch(URL_SEARCH + "?" + params.join("&"))
        .then(res => res.json())
        .then(json => json)
}

module.exports = {
    fetchSuggest,
    fetchHotword,
    fetchSearchData
}