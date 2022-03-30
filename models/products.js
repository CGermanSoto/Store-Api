const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true, 'El nombre del producto es requerido'],
    
    },
    price:{
        type: Number,
        required:[true, 'El precio es requerido'],
    },
    featured: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 4.5
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    company: {
        type: String,
        enum: {
            values: ['ikea', 'liddy', 'caressa', 'marcos'],
            message: '{VALUE} no soportado'
        }
    }
});

module.exports = mongoose.model('Product', productSchema )