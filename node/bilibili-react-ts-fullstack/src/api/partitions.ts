import { PartitionType } from '@/models'
// 模块化 接口多 
export const getPartitionsRequest = ():Promise<PartitionType[]> => {
    const p = new Promise<PartitionType[]>((resolve, reject) => {
        fetch('http://localhost:3300/partitions')
            .then(data => data.json())
            .then(data => {
                resolve(data);
            })
    });
    return p;
}