import React, { Component } from 'react'
import './ToDoList.css'
import store from './store/index'

class ToDoList extends Component {

    constructor(props){
        super(props)
        this.state = store.getState()
        this.inputChange = this.inputChange.bind(this)
        this.addItem = this.addItem.bind(this)
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)
    }

    render(){
        return (
            <div id="container">
               <div id="top">
                    <input 
                    type="text" 
                    placeholder="Write Something" 
                    value={this.state.inputValue}
                    onChange={this.inputChange}
                    />
                    <button 
                    onClick={this.addItem}
                    >提交</button>
               </div>
               <ul id="list">
                   {
                       this.state.list.map((item, index) => {
                           return (
                                <li 
                                key={item+index}
                                onClick={this.deleteItem.bind(this, index)}
                                title="点击删除此项！"
                                >{item}</li>
                           )
                       })
                   }
               </ul>
            </div>
        )
    }
    
    storeChange(){
        this.setState(store.getState())
    }
    inputChange(e){
        const action = {
            type: 'inputValue',
            value: e.target.value
        }
        store.dispatch(action)
    }
    addItem(){
        const action = {
            type: 'addItem'
        }
        store.dispatch(action)
    }
    deleteItem(index){
        const action = {
            type: 'deleteItem',
            value: index
        }
        store.dispatch(action)
    }

}

export default ToDoList