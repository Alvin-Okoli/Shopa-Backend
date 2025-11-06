import { v2 as cloudinary } from 'cloudinary'
import multer from 'multer';
import cloudinaryConfig from '../Utils/CloudinarySetup';
import { getClothes } from '../Controllers/controller'

// configure multer
const storage = multer.memoryStorage();
const upload = multer({ storage })

// Router setup
import { Router } from "express";
const router = Router();


router.get('/clothes', getClothes)

export default router