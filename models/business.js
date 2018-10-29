const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const businessSchema = new Schema({
    businessName: {type: String, required: true, unique: true}
}, {
    timestamps: true
});

const Business = mongoose.model("Business", businessSchema);

module.exports = Business;