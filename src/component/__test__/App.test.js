import React from 'react';
import ReactDOM from 'react-dom';
import App from 'component/App.js';
import CommentBox from 'component/CommentBox';
import CommentList from 'component/CommentList' // using relate path ; i.e configured in .env file
import { shallow } from 'enzyme';

let wrapper;
//if we define wrapper inside beforeEach it will be block scoping and hence will be undefined  in   it() function.

beforeEach(()=>{
    wrapper = shallow(<App />);
})
describe('testing app component',()=>{
    it('should render comment box ',()=>{
        // const div = document.createElement('div'); //jsdom simulates how browser behaves. document object is avaiale with jsdom library
        // ReactDOM.render( <App /> , div);
        // //running App component html code in div.
        // //check inside the div and check if commnetBox component is there or not
        // console.log( div.innerHTML);
        // expect(div.innerHTML).toContain('Comment box component')
        // ReactDOM.unmountComponentAtNode(div); //for code cleanup like removing declared object variable
        console.log(wrapper)
        expect(wrapper.find(CommentBox).length).toEqual(1); //testing CommentBox instance is running in App component
    });

    it('should remder comment list',()=>{
        expect(wrapper.find(CommentList).length).toEqual(1);
    })
})


//Note
/*
three render functions are provided by an enzyme 
1.shallow : it just render its component but none of its children.
2.static: renders the given component and return the plain html
3.FullDOm:renders component and its all children + let us modify afterwards

*/
