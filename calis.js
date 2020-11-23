const express = require('express');
const app = express();
const register = require('./routes/register');
const auth = require('./routes/auth');
const user = require('./routes/user');
const views = require('./routes/views');
const mongoose = require('mongoose');
const config = require('config');
const cors = require('cors');
const corsOptions = {
    exposedHeaders: 'x-auth-token',
};

if (!config.get('jwtPrivateKey')) {
    console.error('FATAL ERROR: jwtPrivateKey not found...');
    process.exit(1);
}

mongoose.connect('mongodb://localhost/calis2', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB!'));

app.set('view engine', 'pug');
app.set('views', './views');
app.use(cors(corsOptions));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb',extended: true}));
app.use(express.static('public'));
app.use('/', views);
app.use('/api/register', register);
app.use('/api/auth', auth);
app.use('/api/user', user);

// Start App
const port = process.env.PORT || 3000;
app.listen(port, () =>  console.log(`App listening on port ${port}...`));