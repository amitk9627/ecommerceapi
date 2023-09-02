const mongoose = require('mongoose');
const productSchema = ({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: true
    },
    discountPercentage: {
        type: Number,
        required: false,
        default: 0
    },
    rating: {
        type: Number,
        required: false,
        default: 0
    },
    stock: {
        type: Number,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    images: {
        type: Array,
        required: false,
        default: []
    },
});

const Products=mongoose.model('Products',productSchema);
module.exports=Products;