import axios from 'axios'

export const getMenuList = ({tab}) => 
  axios.get('https://www.fastmock.site/mock/5321bf649d06645c4266f3e0d45ae1cc/menu/all')
//   .then ( res => {
//     let result=res.data;
//     // let result = orders;
//     // console.log(tab);
//     if(tab){
//         switch(tab) {
//             case "全部":
//                 result=result;
//                 break;
//             case "饮料":
//                 result=result.filter(item => item.status==1);
//                 break;
//             case "美食":
//                 result=result.filter(item => item.status==2);
//                 break;
//             case "烘焙":
//                 result=result.filter(item => item.state==3);
//                 break;
//             case "商品":
//                 result=result.filter(item => item.state==4);
//                 break;
//             default:
//                 break;
//         }
//     }
//     return Promise.resolve({
//         result
//     });
// }
// )
