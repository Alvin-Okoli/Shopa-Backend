import mongoose from 'mongoose'


const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  orderDate: { type: Date, default: Date.now },
  orderStatus: { type: String, enum: ['pending', 'shipped', 'delivered', 'cancelled'] },
  shippingAddress: {
    name: String,
    address: String,
    city: String,
    state: String,
  },
  billingAddress: {
    name: String,
    address: String,
    city: String,
    state: String,
    zip: String,
    country: String
  },
  paymentMethod: { type: String },
  paymentStatus: { type: String, enum: ['paid', 'pending', 'failed'] },
  orderItems: [{
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Clothes' },
    quantity: Number,
    price: Number,
    total: Number
  }],
  subtotal: Number,
  tax: Number,
  shippingCost: Number,
  total: Number,
  discounts: Number,
  couponCode: String
}, { timestamps: true });
