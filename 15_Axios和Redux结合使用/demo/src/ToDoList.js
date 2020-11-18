// 导入相关文件
import React, { Component } from 'react';
// 导入 store 中入口文件，使用 redux 做全局状态管理
import store from './store/index'
// 导入分离的类型文件
import { INPUT_CHANGE, ADD_ITEM, DELETE_ITEM } from './store/actionType'
// 导入分离的生成 action 的文件
import actionCreate from './store/actionCreate'
// 导入样式组件
import ToDoListUI from './ToDoListUI'

// 书写组件类
class ToDoList extends Component {
    // 构造函数
    constructor(props) {
        super(props);
        // 使用 store.getState() 方法拿到 store 仓库中的状态值
        this.state = store.getState()
        // 具体变更函数
        this.storeChange = this.storeChange.bind(this)
        // 订阅模式
        store.subscribe(this.storeChange)
        // 输入框输入值回显函数
        this.inputChange = this.inputChange.bind(this)
        // 添加子项的函数
        this.addListItem = this.addListItem.bind(this)
        // 删除子项的函数
        this.deleteItem = this.deleteItem.bind(this)
    }
    // 渲染函数
    render() { 
        return (
           <ToDoListUI 
           inputValue={this.state.inputValue}
           inputChange={this.inputChange}
           addListItem={this.addListItem}
           list={this.state.list}
           deleteItem={this.deleteItem}
           />
        )
    }
    // 订阅模式，具体的变更函数
    storeChange(){
        this.setState(store.getState())
    }
    // 修改输入框值，回显
    inputChange(e){
        const action = actionCreate(INPUT_CHANGE, e.target.value)
        store.dispatch(action)
    }
    // 新增子项
    addListItem(){
        const action = actionCreate(ADD_ITEM, null)
        store.dispatch(action)
    }
    // 根据对应的 index，删除子项
    deleteItem(index){
        const action = actionCreate(DELETE_ITEM, index)
        store.dispatch(action)
    }
}
 
// 默认导出组件
export default ToDoList;