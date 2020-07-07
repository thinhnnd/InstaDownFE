import API_HELPERS from "api"
import { toast } from "react-toastify";


export const getUserPhotoAlbum = (urlOrUsername) => {
    return async (dispatch, getState) => {
        try {
            let result = await API_HELPERS.getUserImages(urlOrUsername);
            dispatch({
                type: 'GET_USER_POST_PHOTOS',
                isLoading: false,
                photos: result
            })
        } catch(err) {
            console.log('getUserPhoto error', err);
            
            dispatch({
                type: 'GET_PHOTOS_ERROR'
            })
            toast.warn(err.response.data.message);
        }
    }
}