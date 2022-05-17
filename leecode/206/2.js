//{{name}}->person.name

let template = '我是{{name}},年龄{{age}},性别{{sex}}';
let person = {
    name:'养中心',
    age: 18,
    sex :'男'
}
function render(template,data){
    //{{}}  \w表示[a-z]所有字母
    const reg = /\{\{(\w+)\}\}/;
    // console.log(Object.prototype.toString.call(reg));
    if(reg.test(template)){//有占位符没有被替换
        const name = reg.exec(template)[1];//exec正则的一个方法； match
        console.log(name);
        template = template.replace(reg,person[name]);
        return render(template,data);
    }
    return template;
}
console.log(render(template,person));