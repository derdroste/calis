const express = require('express');
const router = express.Router();
const {User, validate} = require('../models/user');
const bcrypt = require('bcrypt');
const pick = require('lodash/pick');

router.post('/',async (req, res) => {
    const {error} = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send('User already registered with this email.');

    user = new User(
        pick(req.body, ['name', 'email', 'password'])
    );

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();

    const token = user.generateAuthToken();
    res.header('x-auth-token', token).send(pick(user, ['_id', 'name', 'email']));
});

module.exports = router;