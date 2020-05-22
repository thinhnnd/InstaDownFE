import axios from "axios";
import CONFIG from './config';

export const getPostImage = async (postUrl) => {
    try {
        const res = await axios.post(`${CONFIG.url}/post`, { url: postUrl })
        console.log(res);
        return res.data;
    }
    catch (err) {
        throw err;
    }
}