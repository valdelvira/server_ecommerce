const { Schema, model } = require('mongoose')

const cartItemSchema = new Schema(
    {
        product: {
            type: String,
            trim: true
        },
        description: {
            type: String,
            trim: true
        },
        quantity: Number,
        purchasePrice: {
            type: Number,
            default: 0
        },
        totalPrice: {
            type: Number,
            default: 0
        },
        priceWithTax: {
            type: Number,
            default: 0
        },
        totalTax: {
            type: Number,
            default: 0
        },
        status: {
            type: String,
            default: 'Not processed',
            enum: ['Not processed', 'Processing', 'Shipped', 'Delivered', 'Cancelled']
        }
    },
    {
        timestamps: true
    }
)

module.exports = model('CartItem', cartItemSchema)


const cartSchema = new Schema(
    {
        products: [cartItemSchema],
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        updated: Date
    },
    {
        timestamps: true
    }
)

module.exports = Mongoose.model('Cart', cartSchema)