// const mongoose = require('mongoose');
// const store = mongoose.store;

// const locationsstore = new store({
//     name: {
//         type: String,
//         required: true
//     },
//     note: {
//         type: String,
//         required: true
//     },
//     latitude: {
//         type: Number,
//         required: true
//     },
//     longitude: {
//         type: Number,
//         required: true
//     }
// },{ timestamps: true})

const Locations = mongoose.model('Locations', locationsstore);
module.exports = Locations;

