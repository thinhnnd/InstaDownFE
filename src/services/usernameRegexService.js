const usernameRegex = /^[\w._]+$/;

const isInstagramUsername = (username) => {
    if( usernameRegex.test(username) ) {
        return true;
    }
    else {
        return false;
    }
}

export default isInstagramUsername;