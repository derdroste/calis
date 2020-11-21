const mongoose = require('mongoose');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const config = require('config');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30
    },
    email: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 1024
    }
});

userSchema.methods.generateAuthToken = function () {
    return jwt.sign({_id: this._id}, config.get('jwtPrivateKey'));
};

const User = mongoose.model('Customer', userSchema);

// Validate Request
function validateUser(user) {
    const schema = Joi.object({
        name: Joi.string().min(3).max(30).required(),
        email: Joi.string().min(3).max(255).required().email(),
        password: Joi.string().min(3).max(255).required()
    });

    return schema.validate(user);
}

module.exports.User = User;
module.exports.validate = validateUser;