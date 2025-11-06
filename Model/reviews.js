import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    ratings: {
        type: Number,
        required: true
    },
    clothReviewed: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Clothes'
    },
    date: {
        type: Date,
        default: Date.now
    },
    helpfulVotes: {
        type: Number,
        default: 0
    },
    notHelpfulVotes: {
        type: Number,
        default: 0
    }
}, { timestamps: true
})

const Review = mongoose.model('Review', reviewSchema)

export default Review