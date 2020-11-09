const defaultState = {
    list: ['01,学习前端知识', '02,查看业务代码', '03,读写博客'],
    inputValue: ''
}

const result =  (state = defaultState, action) => {
    // Reducer 中只能接收 state，不能修改 state
     if(action.type === 'inputChange'){
         let newState = JSON.parse(JSON.stringify(state))
         newState.inputValue = action.value
         return newState
     }else if(action.type === 'inputFocus' && action.value === ''){
         let newState = JSON.parse(JSON.stringify(state))
         newState.inputValue = action.value
         return newState
     }

     return state
}

export default result