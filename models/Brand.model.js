const { Schema, model } = require('mongoose')

const brandSchema = new Schema(
    {
        name: {
            type: String,
            trim: true
        },
        description: {
            type: String,
            trim: true
        },
        imageUrl: String,
        isActive: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true
    }
)

module.exports = model('Brand', brandSchema)