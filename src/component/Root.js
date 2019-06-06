import { createStore } from 'redux';
import { Provider } from 'react-redux';
import configStore from './store';
import React from 'react'

const store = configStore();

export default function( props ){
    return (
    <Provider store={store}>
        { props.children }
    </Provider>
    )
}