import Order from '../Model/order.js';
import Clothes from '../Model/clothes.js';

// Cloudinary setup
import { v2 as cloudinary } from 'cloudinary';
import cloudinaryConfig from '../Utils/CloudinarySetup.js';

export const getClothOrdersForAdmin = async ()=>{
    console.log('newArrivals request received')  
}

export const createCloth = async (req, res)=>{
    console.log('receved new cloth ', req.body)
    const newCloth = req.body;
    const clothImages = req.files
    let images = null
    if(clothImages){
        images = clothImages.map(image=>({
            url: image.path,
            cloudinary_id: image.file
        }))

    }

    try{
        const savedCloth = await Clothes.create(newCloth)
        if(!savedCloth){
                res.status(400).json({
                message: 'Cloth not saved',
                ok: false
            })
        }
        res.status(200).json({
            newCloth: savedCloth,
            ok: true
        })
    } catch(err){
        console.error(err)
        res.status(500).json({
            message: 'Internal Server Error',
            ok: false
        })        
    }
}