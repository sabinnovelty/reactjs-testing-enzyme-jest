import { combineReducers } from 'redux';
import saveCommentReducer from './saveComment.reducer';

export default combineReducers({
    comments:saveCommentReducer
});