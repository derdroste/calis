const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('calis', {
        title: 'Calis'
    });
});

module.exports = router;