
import setAuthHeader from '../../utils/setAuthHeader';
import API_HELPERS from "api";
import { GET_ERRORS, SET_CURRENT_USER } from '../constants'


export const loginUser = (userData) => {
    return async (dispatch, getState) => {
        try {
            let result = await API_HELPERS.loginUser(userData)
            localStorage.setItem("jwtToken", result.token)
            setAuthHeader(result.token)
            dispatch(getCurrentUser())
        } catch(err) {
            console.log('login action error', err);
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        }
    }
}

export const registerUser = (userData, history) => {
    return async (dispatch, getState) => {
        try {
            let result = await API_HELPERS.registerUser(userData);
            history.push('/login')
        } catch(err) {
            console.log('register action', err);
            dispatch({
                type: GET_ERRORS,
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


