import { Video } from '@/models/index'

// const videos :Video[]= [{
//     id:1,
//     name:'没 有 鸡 退 可 言 1',
//     pic:'https://www.bilibili.com/video/BV17N4y1g7Yb?spm_id_from=333.851.b_7265636f6d6d656e64.1&vd_source=5997b84633776e10bf5e0637b56e2159'
// },{
//     id:2,
//     name:'没 有 鸡 退 可 言 2',
//     pic:'https://www.bilibili.com/video/BV17N4y1g7Yb?spm_id_from=333.851.b_7265636f6d6d656e64.1&vd_source=5997b84633776e10bf5e0637b56e2159'
// },{
//     id:3,
//     name:'没 有 鸡 退 可 言 3',
//     pic:'https://www.bilibili.com/video/BV17N4y1g7Yb?spm_id_from=333.851.b_7265636f6d6d656e64.1&vd_source=5997b84633776e10bf5e0637b56e2159'
// }]
export const getVideosRequest = (): Promise<Video[]> => {
    const p = new Promise<Video[]>((resolve, reject) => {
        // setTimeout(() => {
        //     resolve(Video)
        // },1000)

        fetch('http://localhost:3300/getVideos')
            .then(data => data.json())
            .then(data => {
                console.log(data);
                resolve(data)
            })
    })
    return p
}

export const getHotwordRequest = (): Promise<any[]> => {
    const p = new Promise<any[]>((resolve, reject) => {
        fetch('http://localhost:3300/search/hotword')
            .then(data => data.json())
            .then(data => {
                console.log(data);
                resolve(data);
            })
    })
    return p
} 