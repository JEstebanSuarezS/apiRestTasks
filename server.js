const express = require('express'); 
const app = express(); 
const bodyParser = require('body-parser')
const morgan = require('morgan')

//Validamos que no estemos en ambiente de producción
if(process.env.NODE_ENV != 'production'){
    // Se carga la configuración archivo .env al process.env
    require('dotenv').config();
}

app.set('port', process.env.PORT || 4000);

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/api/v1/tasks', require ('./api/v1/routes/tasks.routes'));

app.listen(app.get('port'),()=>{
    console.log(`Server running on localhost:${app.get('port')}`)
})