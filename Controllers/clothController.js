import Clothes from '../Model/clothes.js';
import Review from '../Model/reviews.js';
import { v2 as cloudinary } from 'cloudinary';
import cloudinaryConfig from '../Utils/CloudinarySetup.js';


export const cloth = async (req, res) => {
    const { id } = req.params;
    try {
        const clothItem = await Clothes.findById(id);
        if (!clothItem) {
            return res.status(404).json({
                message: 'Cloth item not found',
                ok: false
            });
        }
        res.status(200).json({
            message: 'Cloth item fetched successfully',
            clothItem,
            ok: true
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: 'Internal Server Error',
            ok: false
        });
    }
}

export const newArrivals = async ()=>{
    console.log('newArrivals request received')  
}

export const clotheType = async (req, res)=>{
    const clothType = req.body;
    try{
        const typeOfCloth = await Clothes.find(clothType);
        if(!typeOfCloth){
            res.status(400).json({
            message: 'Cloth type not provided',
            ok: false
        })
        }
        if(typeOfCloth.length === 0){
            return res.status(404).json({
                message: 'No clothes found for the specified type',
                ok: false
            })
        }
        res.status(200).json({
            message: 'Clothes type fetched successfully',
            typeOfCloth,
            ok: true
        })
    }
    catch(err){
        console.error(err)
        res.status(500).json({
            message: 'Internal Server Error',
            ok: false
        })
    }
}

export const newClothes = async (req, res)=>{
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

export const getClothReview = async (req, res) => {
    const id = req.params.id;
    if(!id){
        return res.status(400).json({
            message: 'Cloth ID is required',
            ok: false
        })
    }

    try{
        const reviews = await Review.find({ clothReviewed: id });
        if(!reviews){
            return  res.status(404).json({
                message: 'No reviews found for this cloth item',
                ok: false
            })
        }
        res.status(200).json({
            message: 'Reviews fetched successfully',
            reviews,
            ok: true
        })
    }catch(err){
        console.error(err)
        res.status(500).json({
            message: 'Internal Server Error',
            ok: false
        })        
    }
}

export const postClothReview = async (req, res) => {
    const { name, comment, ratings, clothReviewed } = req.body;
    if(!name || !comment || !ratings || !clothReviewed){
        return res.status(400).json({
            message: 'Name, comment, and clothReviewed are required',
            ok: false
        })
    }
    try{
        const newReview = await Review.create({
            name,
            comment,
            ratings,
            clothReviewed
        })
        if(!newReview){
            return res.status(400).json({
                message: 'Review not saved',
                ok: false
            })
        }
        res.status(200).json({
            message: 'Review saved successfully',
            newReview,
            ok: true
        })
    }catch(err){
        console.error(err)
        res.status(500).json({
            message: 'Internal Server Error',
            ok: false
        })        
    }
}

export const clothOrder = async ()=>{
    console.log('newArrivals request received')  
}