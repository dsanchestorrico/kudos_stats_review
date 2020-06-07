const express = require('express');
const morgan = require('morgan');

const app = express();


//settings
app.set('port', 5000);
app.set('json spaces',2);

//connecting to db

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//subscribe to queu_kudos
const subscriber = require('./queue/subscriber');
const subscriberUsuario = require('./queue/subscriberUsuario');

//iniciando el servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});