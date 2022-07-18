import * as actionTypes  from '../constants'
// - reducer 分支 goods: 
let data = {
    list: [
        {
            goodsId: '10001',
            goodsSrc: 'https://aplus-img.oss-cn-beijing.aliyuncs.com/vVORwq7j4JJPH3LfR55.jpg',
            goodsTitle: '南酸枣粒 酸甜解暑',
            goodsSubtitle: '江西特产 五眼果 249g',
            goodsPrice: '25.8',
            goodsNum: '2',
        },
        {
            goodsId: '10002',
            goodsSrc: 'https://aplus-img.oss-cn-beijing.aliyuncs.com/kSJmZOJWythpbOFnMnb.jpg',
            goodsTitle: '麻花小辫 迷你酥条',
            goodsSubtitle: '山药小麻花 249g',
            goodsPrice: '88.8',
            goodsNum: '1',
        },
        {
            goodsId: '10003',
            goodsSrc: 'https://timgsa.oss-cn-beijing.aliyuncs.com/dearcoo/thumb/8015.png',
            goodsTitle: '香菇脆 即食果蔬',
            goodsSubtitle: '江西风味 249g',
            goodsPrice: '100',
            goodsNum: '10',
        },
        {
            goodsId: '10004',
            goodsSrc: 'https://timgsa.oss-cn-beijing.aliyuncs.com/dearcoo/thumb/8002_v1.png',
            goodsTitle: '酸甜可口 风味独特',
            goodsSubtitle: '菩提圣果 圣果可串手串 220g',
            goodsPrice: '30.5',
            goodsNum: '5',
        }
    ]
}
// 引用式赋值 
export default function(state = data, action) {
    switch(action.type) {
        //  reducer 重新计算， 财务的角度 
        // 选择或反选 
        // action  { type： actionTypes.CHECK_GOODS, data: goodsID}
        case actionTypes.CHECK_GOODS:
            // 在reducer 重新计算前的状态 ？ 旧状态
            let checkList = state.list; 
            checkList.map(item => {
                if (item.goodsId == action.data) {
                    item.check = !item.check
                    // 0  1  - 
                    item.goodsNum == '0' ? item.goodsNum = '1' : ''
                }
            })
            // 新状态 
            return  Object.assign({}, state, {
                list: [...checkList]
            })
            break;
        // +-
        case actionTypes.CHNAGE_GOODS_NUM:
            let changeList = state.list;
            //  + -  指定商品  action type CHNAGE_GOODS_NUM 
            //  data: {id:id, status:'add|minus' }
            changeList.map((item) => {
                if (item.goodsId == action.data.goodsId ) {
                    action.data.status == 'add'? item.goodsNum++: item.goodsNum--;
                    item.goodsNum == '0' ? item.check = false : ''
                    // -1 UI 去做 item.goodsNum> 0 && <button>-</button>
                }
            })
            return Object.assign({}, state, {list: [...changeList]})
            break;
        case actionTypes.CHECK_ALL_GOODS:
            // 全选和取消全选 
            // state 旧状态  保全
            let checkAllList = state.list
            // 新状态 完整正确
            checkAllList.map(item => {
                item.check = !action.data
            })
            return Object.assign({}, state, {list:[...checkAllList]})
            break;
        default:
            let list = state.list
            list.map(item => {
                item.check = true
            })
            // 返回一个全新的对象，　拥有　　state  list  
            // 为了搞定引用式赋值 
            // 使用了Object.assign  未来  ImmutableJS 
            // 讲新的状态与原来的状态在物理层面上 绝对区分开
            // redux 有洁癖 新状态, 但是旧的状态是不是丢了? 
            // 每一刻的状态都留下来 可以被追溯 
            // {
            //     ...state,
            //     list: 
            // }

            return Object.assign({}, state, { list: [...list]})
    }
}