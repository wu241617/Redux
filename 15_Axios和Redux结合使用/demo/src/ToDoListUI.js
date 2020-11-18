//import React, { Component } from 'react'
import React from 'react'
// 导入 antd 组件样式文件和组件文件
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd' 
// 导入自定义的外部组件样式文件
import './ToDoList.css'

// UI组件可以改写为无状态组件(没有任何业务逻辑)，实质是一个函数，提升性能。props 为其他组件传递的信息参数
const ToDoListUI =  (props) => {
    return (
        <div className="container">
        <div className="search">
            <Input 
            style={{width:'250px'}}
            placeholder="Write Somthing"
            value={props.inputValue}
            onChange={props.inputChange}
            ></Input>
            <Button 
            type="primary"
            onClick={props.addListItem}
            >添加</Button>
        </div>
            <List
            className="search"
            bordered
            dataSource={props.list}
            renderItem={(item, index) => <List.Item className="listItem">{index + 1 + ', ' + item}
            <Button 
            type="primary"
            danger size="small" 
            className="btn" 
            onClick={() => {props.deleteItem(index)}}        
            >删除</Button>
            </List.Item>}
            />
    </div>
    )
}
// 普通组件
// class ToDoListUI extends Component {
//     render(){
//         return (
//             <div className="container">
//             <div className="search">
//                 <Input 
//                 style={{width:'250px'}}
//                 placeholder="Write Somthing"
//                 value={this.props.inputValue}
//                 onChange={this.props.inputChange}
//                 ></Input>
//                 <Button 
//                 type="primary"
//                 onClick={this.props.addListItem}
//                 >添加</Button>
//             </div>
//                 <List
//                 className="search"
//                 bordered
//                 dataSource={this.props.list}
//                 renderItem={(item, index) => <List.Item className="listItem">{index + 1 + ', ' + item}
//                 <Button 
//                 type="primary"
//                 danger size="small" 
//                 className="btn" 
//                 onClick={() => {this.props.deleteItem(index)}}        
//                 >删除</Button>
//                 </List.Item>}
//                 />
//         </div>
//         )
//     }
// }

export default ToDoListUI