const { Schema, model } = require('mongoose')

const addressSchema = new Schema(
    {
        address: String,
        city: String,
        imageUrl: String,
        country: String,
        zipCode: String,
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    },
    {
        timestamps: true
    }
)

module.exports = model('Address', addressSchema)