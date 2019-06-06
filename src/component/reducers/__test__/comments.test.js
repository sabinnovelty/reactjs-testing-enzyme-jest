import commentReducer from '../saveComment.reducer';
import {SAVE_COMMENT } from '../../actions/types';

it('handle of action type SAVE_COMMENT',()=>{
    const action ={
        type:SAVE_COMMENT,
        payload:'new comment'
    };

    const newState = commentReducer([],action);
    expect(newState).toEqual(['new comment'])
});

it('handle action with unknown type',()=>{
   const state= commentReducer([],{type:'unknown_action'});
   expect(state).toEqual([]);
})