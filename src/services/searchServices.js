import { useHistory } from "react-router";

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
    else {
        console.log('search Service', searchInput);
        history.push('/user/' + searchInput);
    }
}

export default checkSearchInput;

