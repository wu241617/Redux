// 生成 action 的函数
var actionCreate = (type, value) => {
    return {type:type, value: value}
}

export default actionCreate