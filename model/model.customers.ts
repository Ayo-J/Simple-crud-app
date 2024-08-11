import mongoose from 'mongoose';

const CustomerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter customer name"],
  },
  phone: {
    type: String,
    required: [true, "Please enter customer phone number"],
  },
  email: {
    type: String,
    required: [true, "Please enter customer email"],
  },
  address: {
    type: String,
    required: [true, "Please enter customer address"],
  },
}, {
  timestamps: true,
});

const Customer = mongoose.model('Customer', CustomerSchema);  
export default Customer;