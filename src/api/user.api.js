import axios from "axios";
import CONFIG from './config';

export const getUserImages = async (userUrl) => {
    try {
        const res = await axios.post(`${CONFIG.url}/download/album`, { url: userUrl });
        return res.data;
    }
    catch (err) {
        throw err;
    }

}


export const loginUser = async (loginData) => {
    try {
        const result = await axios.post(`${CONFIG.url}/user/login`, loginData);
        return result.data;
    } 
    catch (err) 
    {
        console.log('err axios', err.response)
        throw err;
    }
}


export const registerUser = async (registerData) => {
    try {
        console.log('register data', registerData);
        const result = await axios.post(`${CONFIG.url}/user/register`, registerData);
        return result;
    } 
    catch (err) 
    {
        throw err;
    }
}

export const getUserInfo = async () => {
    try {
        const res = await axios.get(`${CONFIG.url}/user/info`);
        return res.data;
    } 
    catch (err) 
    {
        console.log('err axios', err.response)
        throw err;
    }
}


export const likeImage = async (id, url) => {
    try {
        const res = await axios.post(`${CONFIG.url}/like`, {
            id,
            url
        });
        return res.data;
    } 
    catch (err) 
    {
        throw err;
    }
}