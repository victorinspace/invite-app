import { createStore } from 'redux'
import { mainReduce } from 'mainReduce'

const store = createStore(mainReduce)

export default store