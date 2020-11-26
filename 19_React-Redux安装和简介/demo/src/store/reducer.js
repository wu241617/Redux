const defaultState = {
    inputValue:'',
    list:['上午学习新的知识，redux相关', '下午做相关应用案例', '晚上读写博客']
}

const result = function(state=defaultState, action){
    if(action.type === 'inputValue'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }else if(action.type === 'addItem'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list = [...state.list, state.inputValue]
        newState.inputValue = ''
        return newState
    }else if(action.type === 'deleteItem'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.value, 1)
        return newState
    }
    return state
}

export default result