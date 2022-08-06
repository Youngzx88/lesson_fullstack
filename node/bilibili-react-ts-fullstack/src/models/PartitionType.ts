// type interface : 右边 
class PartitionType {
    constructor(public id :number, public name: string, 
        public children: PartitionType[] = []) {
    }
}
// data => 数据  转成 菜单项实例
function createPartitionTypes(data: any[]):PartitionType[] {
    return data.map(item => new PartitionType(item.tid, item.typename))
}

export {
    PartitionType,
    createPartitionTypes
}