// import {
// 	SET_CURRENT_USER,
//     LIKE_IMAGE,
// } from '../constants'

// const initialState = {
// 	user: null
// }

// export default function (state = initialState, action) {
// 	switch (action.type) {
// 		case LIKE_IMAGE:
// 			return {
// 				...state,
// 				user: {
// 					...state.user,
// 					instaLike: [...state.user.instaLike, action.payload]
// 				}
// 			}
// 		default:
// 			return state;
// 	}
// }