const mongoose = require('mongoose');

const cartSchema = ({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Products",
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Users",
        required: true,
    }
});

const Carts = mongoose.model('Carts', cartSchema);
module.exports = Carts;