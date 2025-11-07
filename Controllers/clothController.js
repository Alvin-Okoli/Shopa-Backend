import Clothes from '../Model/clothes.js';

export const getClothById = async (req, res) => {
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
