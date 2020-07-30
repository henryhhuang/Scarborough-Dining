const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let MenuItem = require('../menu_item').schema;

const restaurantSchema = new Schema({
    ownerID: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    ratings: {
        type: [Number],
        required: true
    },
    name: {
        type: String,
        required: true
    },
    logoURL: {
        type: String,
        required: true
    },
    introVideoURL: {
        type: String,
        required: true
    },
    imageURLs: {
        type: [String],
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    city: {
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    province: {
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    postalCode: {
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    cuisineTypes: {
        type: [String],
        required: true
    },
    description: {
        type: String,
        required: true
    },
    longDescription: {
        type: String,
        required: true
    },
    menuItems: {
        type: [MenuItem],
        required: true
    },
    verified: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
}); 

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;