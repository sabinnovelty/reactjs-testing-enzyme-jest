import {saveComment} from '../index';
import { SAVE_COMMENT} from '../types';

describe('saveComment action',()=>{
    it('return valid payload',()=>{
        const payload='new comment';
        const action = saveComment(payload);
        expect(action.payload).toEqual('new comment')
    });

    it('return valid action type',()=>{
        const type = SAVE_COMMENT;
        const action = saveComment();
        expect(action.type).toEqual('SAVE_COMMENT');
    })
})