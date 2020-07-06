import axios from "axios";
import CONFIG from './config';

export const getPostImage = async (postUrl) => {
    try {
        const res = await axios.post(`${CONFIG.url}/download/post`, { url: postUrl })
        return res.data;
    }
    catch (err) {
        throw err;
    }
}