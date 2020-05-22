import * as postApi from './post.api';
import * as userApi from './user.api';

const API_HELPERS = {
    ...postApi,
    ...userApi
}

export default API_HELPERS;