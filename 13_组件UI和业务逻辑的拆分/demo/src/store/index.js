import { createStore, applyMiddeware, compose } from 'redux'

// 使用  compose 做增强函数
import reducer from './reducer'
import thunk from 'redux-thunk'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE ? window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE({}):compose

const enhancer = composeEnhancers(applyMiddeware(thunk))
const store = createStore(
    reducer,
    enhancer
    )

export default store