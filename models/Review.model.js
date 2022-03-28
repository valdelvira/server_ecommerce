const { Schema, model } = require('mongoose')

const reviewSchema = new Schema(
    {
        title: {
            type: String,
            trim: true
        },
        description: {
            type: String,
            trim: true
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        product: {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        },
        status: {
            type: String,
            default: 'Waiting Approval',
            enum: ['Waiting Approval', 'Rejected', 'Approved']
        },
        rating: {
            type: Number,
            default: 0
        },
    },
    {
        timestamps: true
    }
)

module.exports = model('Review', reviewSchema)