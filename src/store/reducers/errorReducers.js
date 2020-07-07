import { GET_ERRORS } from '../constants'
import { toast } from 'react-toastify';

const initialState = {
    error: ''
}

const notify = () => toast("Wow so easy !");
export default function (state = initialState, action) {
    switch(action.type) {
        case GET_ERRORS:
            return action.payload;
        case REGISTER_ERROR:
            return action.payload
        default:
            return state;
    } 
}