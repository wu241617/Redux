// 导入 React 相关的文件组件
import React, { Component } from 'react'
// 导入外部样式文件
import './TodoList.css'
// 导入 antd 组件库的部分组件和相关样式
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd' 
// 导入 store 仓库入口文件
import store from './store/index'

// 书写组件类
class TodoList extends Component {
    
    // 构造函数
    constructor(props){
        super(props)
        // 组件中使用 Redux，从store仓库中，取出 state 状态值，并赋值
        this.state = store.getState()
        // 输入款文本改变回显函数
        this.inputChange = this.inputChange.bind(this)
        // 添加按钮的点击事件函数
        this.addListItem = this.addListItem.bind(this)
        // 订阅模式
        // 具体的方法函数
        this.storeChange = this.storeChange.bind(this)
        // 当 store 中状态值改变时，调用具体的方法函数，进行状态值的修改调整
        store.subscribe(this.storeChange)
    }

    // 渲染函数
    render(){
        // JSX（）中书写，可以换行
        return (
            <div id='container'>
                <div>
                    <Input 
                    placeholder='Write Somthing' 
                    style={{width: '250px'}}
                    onChange={this.inputChange}
                    value={this.state.inputValue}
                    // ref={(input) => {this.input = input}}
                    ></Input>
                    <Button type='primary' onClick={this.addListItem}>新增</Button>
                    <div id='list'>
                        <List
                            bordered
                            dataSource={this.state.list}
                            renderItem={(item, index) => <List.Item >{index + 1 + ', ' + item}
                            <Button type="primary"
                             danger size="small" 
                             className="btn"
                             onClick={this.deleteListItem.bind(this, index)}
                            >删除</Button>
                            </List.Item>}
                        />
                    </div>
                </div>
            </div>
        )
    }

     // 发布订阅模式，状态的改变
     storeChange(){
        this.setState(store.getState())
    }

    // 输入框数值改变显示
    inputChange(e){
        // action 对象，标记状态值的修改，调用 dispatch 方法传给 store 仓库
       const action = {
           type: 'inputChange',
           value: e.target.value
       }
       store.dispatch(action)
    }

    // 点击添加子项
    addListItem(){
        const action = { type: 'addListItem'}
        store.dispatch(action)
    }

    // 根据 index 删除对应子项
    deleteListItem(index){
        const action = {
            type: 'deleteListItem',
            value: index
        }
        store.dispatch(action)
    }
}

export default TodoList