import {useState} from 'react'
function Dog(){
    //构造函数 默认返回JSX -》可以当作自定义组件，插入到JSX中
    let [isRunning,setIsrunning] = useState(false)
    let [isBarking,setIsbarking] = useState(false)
    const handleClick = () =>{
        setIsbarking(true);
        setIsrunning(true);
        setTimeout(()=>{
            setIsbarking(false);
            setIsrunning(false);
        },2000)
    }
    return(
        //动态？多个状态
        //DOM编程已经一去不复返了
        <div onClick={handleClick}>
            <div>Dog</div>
            <p>{isBarking && '汪汪汪'}</p>
            <p>{isRunning && 'runrunrun'}</p>
        </div>
    )
}
export default Dog