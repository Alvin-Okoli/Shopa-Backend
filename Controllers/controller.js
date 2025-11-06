import Clothes from '../Model/clothes'
import { v2 as cloudinary } from 'cloudinary'


export const clotheType = async (req, res)=>{
    const clotheType = req.params.category;

    try{
        const typeOfCloth = await Clothes.find((clotheType));
        if(!typeOfCloth){
            res.status(400).json({
            message: 'Cloth type not provided',
            ok: false
        })
        }
        res.status(200).json({
            message: 'Cloth saved',
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
    const newCloth = req.body.cloth;
    const clothImages = req.files
    const images = clothImages.map(cloth=>{
    })

    try{
        const savedCloth = await Clothes.create({newCloth, images: {url: req.file.path, cloudinary_id}})
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

