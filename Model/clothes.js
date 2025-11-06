import mongoose from "mongoose";

const ClothSchema = new mongoose.Schema({
    name: {
    type: String,
    required: true,
    },
    desription: {
        type: String,
        trim: true
    },
    inventory: {
        type: Number,
        default: 0
    },
    clothType: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true,
        trim: true
    },
    categories: [{ 
        type: String,
        enum: [' T-shirts', 'Shorts', 'Shirts', 'Hoodie', 'pants', 'joggers' ]
     }],
    colors: [{ 
        name: String,
        colorCode: String
    }],
    price: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        default: 0
    },
    sizes: [{
        type: String,
        enum: ['small', 'medium', 'large', 'x-large']
    }],
    ratings: {
        type: String
    },
    reviews: {
        type: Number,
        default: 0
    },
    images: [{
        url: String,
        cloudinary_id: String
    }]
}, {timestamps: true})

const Clothes = mongoose.model('Clothes', ClothSchema)
export default Clothes