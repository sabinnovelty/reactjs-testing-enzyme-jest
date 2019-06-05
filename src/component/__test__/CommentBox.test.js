
import CommentBox from 'component/CommentBox';
import React from 'react';
import { mount } from 'enzyme';
import { wrap } from 'module';

let wrapper;


beforeEach(()=>{
    wrapper = mount(<CommentBox />); //mount is use when we have to interact with content of the page like button

})

afterEach(()=>{
    wrapper.unmount();

})

//Note
// before 'it' block runs beforeEach is called and after 'it' block executes afterEach function runs;

it('should render textbox and button',()=>{
    console.log(wrapper)
    expect(wrapper.find('textarea').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(1);
});

it('textbox that user can type in ',()=>{
    wrapper.find('textarea').simulate('change',{
        target:{value:'new comment'}
    });

    wrapper.update(); //this.setstate is asyn so we are forcing to update

    expect(wrapper.find('textarea').props('value')).toEqual('new comment')
})