import isInstagramUsername from "./usernameRegexService";

const checkSearchInput = (history, searchInput) => {
    let base = 'www.instagram.com';
    if (searchInput.includes(`${base}`)) {
        if (searchInput.includes(`${base}/p/`)) {
            var splitUrl = searchInput.split('/p/');
            history.push('/post/' + splitUrl[1]);
        }
        else {
            let splitUrl = searchInput.split('www.instagram.com/');
            history.push('/user/' + splitUrl[1]);
        }
    }
    else if(isInstagramUsername(searchInput)){
        console.log('search else', searchInput);
        history.push('/user/' + searchInput);
    }
}

export default checkSearchInput;

