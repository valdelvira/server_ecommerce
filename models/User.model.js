const { Schema, model } = require('mongoose')

const userSchema = new Schema(
    {
        firstName: String,
        lastName: String,
        phoneNumber: Number,
        password: String,
        email: {
            type: String,
            required: [true, 'Email is required'],
            validate: email => {
                return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email)
            }
        },
        imageUrl: String,
        role: {
            type: String,
            enum: ['USER', 'MERCHANT', 'ADMIN'],
            default: 'USER'
        },
        merchant: {
            type: Schema.Types.ObjectId,
            ref: 'Merchant',
            default: null
        }
    },
    {
        timestamps: true
    }
)

module.exports = model('User', userSchema)