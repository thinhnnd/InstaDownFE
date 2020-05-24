import axios from "axios";
import CONFIG from './config';

export const getUserImages = async (userUrl) => {
    try {
        const res = await axios.post(`${CONFIG.url}/album`, { url: userUrl });
        console.log('user api', res);
        return res.data;
    }
    catch (err) {
        throw err;
    }

}