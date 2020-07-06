import API_HELPERS from "api"

export const getUserInfo = () => {
    return async (dispatch, getState) => {
        try {
            let user = await API_HELPERS.getUserInfo(token)
            //let user = await API_HELPERS.likeImage(token)
            dispatch({
                type: 'GET_USER_EROR',
                isLoading: false,
                user
            })
        } catch(err) {
            console.log('get user action', err);
            dispatch({
                type: 'GET_USER_ERROR',
                message: err.message,
                user: null
            })
        }
    }
}

export const likeImage = (id, url) => dispatch => {
        API_HELPERS.likeImage(id, url)
        .then(res => dispatch({
            type: FOLLOW,
            payload: res.data
        }))
        .catch(err => console.log(err))
}