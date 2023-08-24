const mongoose = require('mongoose');
// connecting to mongoose
mongoose.connect("mongodb+srv://ds7198170:VsRkz4zD95UiA4Gp@habittracker.7k58byt.mongodb.net/?retryWrites=true&w=majority", 
{ useNewUrlParser: true,
    useUnifiedTopology: true })
;
// mongoose database connection
const db = mongoose.connection;
db.on('error',console.error.bind(console,"Error connecting to MongoDb"));

db.once('open',function(){
    console.log('Connected to Database :: MondoDB');
});

module.exports=db;