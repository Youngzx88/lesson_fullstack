// 验证一个字符串是否是回文串
//1.api
function isPalindrome(str){
    const reversedStr = str.split('').reverse().join('')
    if( reversedStr == str ) return true;
    else return false;
}
console.log(isPalindrome("aba"));
//2.双指针
function isPalindrome(str){
    const len = str.length;
    for(let i = 0 ; i < len / 2 ; i ++){
        if(str[i] !== str[len - i - 1]){
            return false;
        }
    }
    return true;
}