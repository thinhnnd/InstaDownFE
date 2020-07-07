
import setAuthHeader from '../../utils/setAuthHeader';
import API_HELPERS from "api";
import { GET_ERRORS, SET_CURRENT_USER, LIKE_IMAGE, REGISTER_ERROR } from '../constants'
import { toast } from "react-toastify";
import { REGISTER } from 'redux-persist/es/constants';

export const loginUser = (userData) => {
    return async (dispatch, getState) => {
        try {
            let result = await API_HELPERS.loginUser(userData)
            localStorage.setItem("jwtToken", result.token)
            setAuthHeader(result.token)
            dispatch(getCurrentUser())
            toast.success("Login success");
        } catch(err) {
            console.log('login action error', err);
            
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
            toast.warn(err.response.data.message);
        }
    }
}

export const registerUser = (userData, history) => {
    return async (dispatch, getState) => {
        try {
            let result = await API_HELPERS.registerUser(userData);
            toast.success("Register success");
            history.push('/login')
        } catch(err) {
            console.log('register action', err);
            toast.warn(err.response.data.message);
            dispatch({
                type: REGISTER_ERROR,
                payload: err.response.data
            })
        }
    }
}

export const setCurrentUser = (data) => {
	return {
		type: SET_CURRENT_USER,
		payload: data
	}
}

export const getCurrentUser = () => async dispatch => {
    try {
        const user = await API_HELPERS.getUserInfo();
        console.log('user', user)
        dispatch(setCurrentUser(user));
    } catch(err) {
        console.log('get user err', err);
    }
    
}

export const logoutUser = () => dispatch => {
	localStorage.removeItem('jwtToken')
	setAuthHeader()
	dispatch(setCurrentUser(null))
}



export const likeImage = (id, url) => dispatch => {
    API_HELPERS.likeImage(id, url)
    .then(res => { 
        console.log('like res', res);
        toast.success('Like successfully');
        dispatch({
        type: LIKE_IMAGE,
        payload: {id, url}
    })
}).catch(err =>  {
    dispatch({
        type: GET_ERRORS,
        payload: err.messsage
    })
    console.log('like error', err.response);
    toast.warn(err.response.data.message);
})
}

