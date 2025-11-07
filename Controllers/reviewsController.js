import Review from '../Model/reviews.js';

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