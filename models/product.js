const mongoose = require("mongoose");

const productModel = new mongoose.Schema(
  {
    

    coverimage: {
      type: String,
    },
    name: {
      type: String,
    },
    
   
    status: {
      type: Boolean,
      default: true,
    },
    description: {
      type: String,
    },
    offerPrice: {
      type: Number,
    },
    
    block: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productModel);

module.exports = { Product };
