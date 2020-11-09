import React, { Component } from 'react'
import './TodoList.css'
// 引入
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store/index'

class TodoList extends Component {

    constructor(props){
        super(props)
        this.state = store.getState()
    }

    render(){
        return (
            <div id="container">
                <div>
                    <Input 
                    placeholder={this.state.inputValue} 
                    style={{width:'250px'}}
                    />
                    <Button type='primary'>增加</Button>
                   <div style={{marginTop:'10px', width: '300px'}}>
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
}

export default TodoList