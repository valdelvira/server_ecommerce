const { Schema, model } = require('mongoose')

const productSchema = new Schema(
    {
        sku: {
            type: String,
            unique: true
        },
        name: {
            type: String,
            trim: true
        },
        description: {
            type: String,
            trim: true
        },
        price: Number,
        quantity: Number,
        imageUrl: String,
        isActive: {
            type: Boolean,
            default: true
        },
        brand: {
            type: Schema.Types.ObjectId,
            ref: 'Brand',
            default: null
        }
    },
    {
        timestamps: true
    }
)

module.exports = model('Product', productSchema)