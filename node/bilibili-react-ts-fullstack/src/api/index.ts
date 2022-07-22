import { Video } from '@/models/index'
// const videos:Video[] = [{
//     id: 1,
//     name: '死缓就是缓一缓再死吗？为什么要有死缓？',
//     pic: 'https://www.bilibili.com/video/BV1nt4y1p78J?spm_id_from=333.851.b_7265636f6d6d656e64.1'
// }, {
//     id: 2,
//     name: '死缓就是缓一缓再死吗？为什么要有死缓？',
//     pic: 'https://www.bilibili.com/video/BV1nt4y1p78J?spm_id_from=333.851.b_7265636f6d6d656e64.1'
// }, {
//     id: 3,
//     name: '死缓就是缓一缓再死吗？为什么要有死缓？',
//     pic: 'https://www.bilibili.com/video/BV1nt4y1p78J?spm_id_from=333.851.b_7265636f6d6d656e64.1'
// }];

export const getVideosRequest = ():Promise<Video[]> => {
    const p = new Promise<Video[]>((resolve, reject) => {
        // setTimeout(() => {
        //     // resolve(videos)
        // }, 1000)
        fetch('http://localhost:3300/getVideos')
            .then(data => data.json())
            .then(data => {
                console.log(data);
                resolve(data)
            })
    });
    return p;
}