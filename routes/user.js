const auth = require('../middleware/auth');
const express = require('express');
const router = express.Router();
const {User} = require('../models/user');
const Joi = require('joi');

router.put('/me/img', auth, async (req, res) => {
    if (!req.body.image) return res.status(400).send('No Image provided.');
    const {error} = validateImg(req.body);
    if (error) return res.status(400).send('Invalid Image.');
    const user = await User.findByIdAndUpdate(req.user._id, {image: req.body.image}, {new: true, useFindAndModify: false});
    res.send(user.image);
});

router.put('/me/info/:id', auth, async (req, res) => {
    if (!req.body.name && !req.body.email) return res.status(400).send('Not the right source provided.');
    const {error} = validate(req.body);
    if (error) return res.status(400).send('Invalid Source.');
    if (req.params.id === 'email') {
        let user = await User.findOne({ email: req.body.email });
        if (user) return res.status(400).send('User already registered with this email.');
    }
    const user = await User.findByIdAndUpdate(req.user._id, {[req.params.id]: req.body[req.params.id]}, {new: true, useFindAndModify: false});
    res.send(user[req.params.id]);
});

function validate(req) {
    const schema = Joi.object({
        email: Joi.string().min(3).max(255).email(),
        name: Joi.string().min(3).max(255)
    });
    return schema.validate(req);
}

function validateImg(req) {
    const schema = Joi.object({
        image: Joi.string().required()
    });
    return schema.validate(req);
}

module.exports = router;