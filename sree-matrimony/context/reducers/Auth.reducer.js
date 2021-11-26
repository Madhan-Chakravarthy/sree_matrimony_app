import IsEmpty from '../../assets/common/Is-Empty';
import {SET_CURRENT_USER} from '../actions/Auth.actions';

export default function (state,action){
    switch (action.type) {
        case SET_CURRENT_USER: 
        return {
            ...state,
            isAuthenticated: !IsEmpty(action.payload),
            user: action.payload,
            userProfile: action.userProfile
        };
        default:
            return state;
    }
}