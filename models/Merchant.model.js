const { Schema, model } = require('mongoose')

const merchantSchema = new Schema(
    {
        name: {
            type: String,
            trim: true
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            validate: email => {
                return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email)
            }
        },
        phoneNumber: String,
        brand: String,
        isActive: {
            type: Boolean,
            default: true
        },
        status: {
            type: String,
            default: 'Waiting Approval',
            enum: ['Waiting Approval', 'Rejected', 'Approved']
        }
    },
    {
        timestamps: true
    }
)

module.exports = model('Merchant', merchantSchema)