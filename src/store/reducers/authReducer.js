import {
	SET_CURRENT_USER,
    LIKE_IMAGE,
} from '../constants'

const initialState = {
	isAuthenticated: false,
	user: null
}

export default function (state = initialState, action) {
	switch (action.type) {
		case SET_CURRENT_USER:
            console.log('SET CURRENT USER', action.payload)
			return {
				...state,
				isAuthenticated: Object.keys(action.payload).length !== 0,
				user: action.payload
			}
		case LIKE_IMAGE:
			return {
				...state,
				user: {
					...state.user,
					instaLike: [...state.user.instaLike, action.payload]
				}
			}
		default:
			return state 
	}
}