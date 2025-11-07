import multer from 'multer';
import { getClothById, newArrivals, clotheType } from '../Controllers/clothController.js';
import { getClothReview, postClothReview } from '../Controllers/reviewsController.js';
import { getOrders, getOrderById, createOrder } from '../Controllers/ordeController.js';
import { getClothOrdersForAdmin, createCloth } from '../Controllers/adminControllers.js';

// configure multer
const storage = multer.memoryStorage();
const upload = multer({ storage })

// Router setup
import { Router } from "express";
const router = Router();

// Clothes routes
router.get('/clothes/:id', getClothById);
router.get('/clothes/newArrivals', newArrivals);
router.post('/clothes/categories', clotheType);

// Review routes
router.get('/clothes/:clothId/reviews', getClothReview);
router.post('/clothes/:clothId/reviews', postClothReview);

// Order routes
router.get('/orders', getOrders);
router.get('/order/:id', getOrderById);
router.post('/orders', createOrder)

// Admin routes
router.get('/admin/order', getClothOrdersForAdmin);
router.post('/admin/createCloth', upload.array('images', 8), createCloth);

export default router