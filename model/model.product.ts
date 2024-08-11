import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter product name"],
  },
  quantity: {
    type: Number,
    required: [true, "Please enter product quantity"],
  },
  price: {
    type: Number,
    required: [true, "Please enter product price"],
  },
  image: {
    type: String,
    required: false,
  },
}, {
  timestamps: true,
});

const Product = mongoose.model('Product', ProductSchema);
export default Product;
