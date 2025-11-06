import multer from 'multer';
import { clotheType, newClothes } from '../Controllers/controller.js'

// configure multer
const storage = multer.memoryStorage();
const upload = multer({ storage })

// Router setup
import { Router } from "express";
const router = Router();

router.post('/category', clotheType);
router.post('/adminPosts', upload.array('images', 8), newClothes)


export default router