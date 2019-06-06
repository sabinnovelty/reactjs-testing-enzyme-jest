import React from 'react';
import ReactDOM from 'react-dom';

import App from './component/App';
import Root from './component/Root'


ReactDOM.render(
    <Root>
        <App />
    </Root>
    , 
    document.querySelector('#root'))