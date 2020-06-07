const mongoose = require('mongoose');

//connecting to db
mongoose.connect('mongodb://localhost:27017/kudos')
    .then(db => console.log('MongoDB connected'))
    .catch(err => console.log(err));
