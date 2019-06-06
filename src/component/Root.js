import { createStore } from 'redux';
import { Provider } from 'react-redux';
import configStore from './store';
import React from 'react'
import reducer from './reducers'



export default function( { children , initialState={}} ){
    return (
    <Provider store={createStore( reducer , initialState)}>
        { children }
    </Provider>
    )
}