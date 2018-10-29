const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    passwordHash: {type: String, required: true}
}, {
    timestamps: true
});

userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.passwordHash);
};

userSchema.virtual('password').set(function(value) {
    this.passwordHash = bcrypt.hashSync(value, 16);
});

const User = mongoose.model("User", userSchema);

module.exports = User;