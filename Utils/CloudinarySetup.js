import {v2 as cloudinary} from 'cloudinary';
import dotenv from 'dotenv';


dotenv.config({path: '../.env'});
const cloud_name = process.env.CLOUD_NAME;
const api_key = process.env.API_KEY;
const api_secret = process.env.API_SECRET;

const cloudinaryConfig = cloudinary.config({
    cloud_name,
    api_key,
    api_secret
});


export default cloudinaryConfig;