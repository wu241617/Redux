// reducer 中，只能读取 state，不能修改
// 调整 newState 值得业务逻辑 
import { INPUT_CHANGE, ADD_ITEM, DELETE_ITEM } from './actionType'

const defaultState = {
    inputValue: '',
    list: ['进行项目计划','具体编码安排','读写个人博客']
}

const result = (state=defaultState, action) => {
    if(action.type === INPUT_CHANGE){
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }else if(action.type === ADD_ITEM){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(state.inputValue)
        newState.inputValue = ''
        return newState
    }else if(action.type === DELETE_ITEM){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.value,1)
        return newState
    }
    return state
}

export default result