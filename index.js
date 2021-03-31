require('./db');
const bodyParser = require('body-parser');
const express =require('express');

const film_router = require('./routers/films');
const reservation_router = require('./routers/reservations');
const seance_router = require('./routers/seances');
const port = process.env.PORT || 3000;
const app=express();
//app.use(bodyParser.json());
app.use(express.json());
app.use('/api/films', film_router);
app.use('/api/reservations', reservation_router);
app.use('/api/seances',seance_router);

app.listen(port , () => {console.log(`listen ... ${port}`)});