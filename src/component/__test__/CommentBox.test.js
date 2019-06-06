import CommentBox from 'component/CommentBox'
import React from 'react'
import { mount } from 'enzyme'
import Root from '../Root'

let wrapper

beforeEach(() => {
  wrapper = mount(<Root>
    <CommentBox />
  </Root>) // mount is use when we have to interact with content of the page like button
})

afterEach(() => {
  wrapper.unmount()
})

// Note
// before 'it' block runs beforeEach is called and after 'it' block executes afterEach function runs;
it('should render textbox and button', () => {
  expect(wrapper.find('textarea').length).toEqual(1)
  expect(wrapper.find('button').length).toEqual(1)
})
describe('text area', () => {
  beforeEach(() => {
    wrapper.find('textarea').simulate('change', {
      target: { value: 'new comment' }
    })

    wrapper.update() // this.setstate is asyn so we are forcing to update
  })

  it('textbox that user can type in ', () => {
    expect(wrapper.find('textarea').prop('value')).toEqual('new comment')
    // checking that textarea has a props with value property
  })

  it('should form submit and clear textarea', () => {
    wrapper.find('textarea').simulate('change', {
      target: { value: 'new comment' }
    })
    wrapper.update()
    wrapper.find('form').simulate('submit')
    // wrapper.update();
    expect(wrapper.find('textarea').prop('value')).toEqual('')
  })
})

// //Note
// 1. put the `it` block in one describe file with common characteristics
// 2. when `it` block has repetaiton of code , we can group `it` block with describe and add new
//     beforeEach block in that describe block
// 3.beforeEach function inside describe block runs only for the `it` block of describe


//Note:test case fail when you connect react componnet with connect function
// 1.when component is connected wiht connect function it expects the store instance ;
// 2.therefore we have to provide store instace with provider to the compoent i.e see  Root elememnt example