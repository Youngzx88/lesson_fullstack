import Loki from 'lokijs'

// 增删改查
//1. 建数据库 notes数据库    
//2. 建数据库 连接数据库 db代表着数据库对象
//3. 建个表/打开表
//4. CRUD操作


//1. 建库
export const db = new Loki('notes',{
    autoload: true,
    autoloadCallback: databaseInitialize,
    autosave: true,
    autosaveInterval:3000,
    persistenceMethod:'localStorage'
})
//2. 初始化库（建一个表）
function databaseInitialize(){
    //数据库初始化
    const notes = db.getCollection('notes')//数据库
    if(notes === null){
        db.addCollection('notes')//创建一个表
    }
}

//3. select 加载一个集合(表) 供其他模块调用 参数是表名
export function loadCollection(collection){
    return new Promise(resolve =>{//查询需要事件，用异步封装
        db.loadDatabase({},()=>{
            const _collection = db.getCollection(collection)
                || db.addCollection(collection)
            resolve(_collection);
        })
    })
}