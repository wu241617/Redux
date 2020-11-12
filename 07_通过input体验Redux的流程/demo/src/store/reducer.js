if(localStorage.getItem('list') === [] || !localStorage.getItem('list')){
    localStorage.setItem('list', JSON.stringify(['学习前端知识', '查看业务代码', '读写博客']))
}
const defaultState = {
    list: JSON.parse(localStorage.getItem('list')),
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
     }else if(action.type === 'addListItem'){
         let newState =JSON.parse(JSON.stringify(state))
         newState.list.push(newState.inputValue)
         localStorage.setItem('list', JSON.stringify(newState.list))
         newState.inputValue = ''
         return newState
     }else if(action.type === 'deleteListItem'){
         let newState = JSON.parse(JSON.stringify(state))
         newState.list.splice(action.value, 1)
         localStorage.setItem('list', JSON.stringify(newState.list))
         return newState 
     }
     return state
}

export default result