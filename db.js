const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://slim28:99363534@cluster0.b4fse.mongodb.net/testDB?retryWrites=true&w=majority', { useNewUrlParser : true , useUnifiedTopology : true})
.then(() => console.log('Mongo is up'))
.catch((err) => console.log('Mongo is down. Raison :',err)); 



