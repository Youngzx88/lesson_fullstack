import axios from 'axios'

export const getQuesionList = ()=>{
    return axios.get('https://www.fastmock.site/mock/9f3132e41d9d9cb7086d244711ec25eb/question/quesions')
}

export const columns = [
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: '题目',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '题解',
      dataIndex: 'ans',
      key: 'ans',
    },
    {
      title: '通过率',
      dataIndex: 'rate',
      key: 'rate',
    },
    {
      title: '难度',
      dataIndex: 'difficulty',
      key: 'difficulty',
    },
  ];