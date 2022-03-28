const mongoose = require('mongoose')
const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost/gestor'

mongoose
    .connect(MONGO_URI)
    .then(connection => console.log('Connected: ', connection.connections[0].name))
    .catch(e => console.log('Error connecting to db: ', e))