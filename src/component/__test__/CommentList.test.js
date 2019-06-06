import { mount } from 'enzyme';
import CommentList from '../CommentList';
import Root from '../Root';
import React from 'react';
import { wrap } from 'module';

let wrapper;

beforeEach(() => {
    const initialState ={
        comments:['comment 1','comment 2']
    }
    wrapper = mount(<Root initialState={initialState}>
      <CommentList />
    </Root>) 
  })

it('should render one li per comment',()=>{
   expect(wrapper.find('li').length).toEqual(2);
});

it('should render text per each comment',()=>{
    expect(wrapper.render().text()).toContain('comment 1');
    expect(wrapper.render().text()).toContain('comment 2')
    //it renders all the text inside the html element
 
})

//cheerio js helps to query to html element to get data