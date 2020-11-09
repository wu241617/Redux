import React, { Component } from 'react'
import './TodoList.css'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd' 
import store from './store/index'
// 书写组件类
class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = store.getState()
        this.inputChange = this.inputChange.bind(this)
        // 订阅模式
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)
    }

    render(){
        return (
            <div id='container'>
                <div>
                    <Input 
                    placeholder='Write Somthing' 
                    style={{width: '250px'}}
                    onChange={this.inputChange}
                    value={this.state.inputValue}
                    ></Input>
                    <Button type='primary'>新增</Button>
                    <div id='list'>
                        <List
                            bordered
                            dataSource={this.state.list}
                            renderItem={item => <List.Item>{item}</List.Item>}
                        />
                    </div>
                </div>
            </div>
        )
    }

    inputChange(e){
       const action = {
           type: 'inputChange',
           value: e.target.value
       }
       store.dispatch(action)
    }

    storeChange(){
        this.setState(store.getState())
    }
}

export default TodoList