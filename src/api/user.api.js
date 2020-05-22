import axios from "axios";
import CONFIG from './config';

export const getUserImages = async (userUrl) => {
    try {
        const res = await axios.post(`${CONFIG.url}/album`, { url: userUrl })
        return res.data;
    }
    catch (err) {
        return err;
    }

}