import { data } from "../../test/fakedata";

const initState =  {
    searchInput: '',
    photos: data,
    isLoading: true,
}

const searchReducer = (state = initState, action) => {
    switch(action.type) {
        case 'GET_USER_POST_PHOTOS':
            return {
                ...state,
                isLoading: false,
                photos: action.photos
            }
        case 'GET_POST_PHOTOS':
            return state;
        case 'GET_PHOTOS_ERROR':
            return state;
        default:
            return state;
    }
}



export default searchReducer;