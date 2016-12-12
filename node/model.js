var mongoose = require('mongoose');
var uri = 'mongodb://localhost:8888/terry';

mongoose.connect(uri);

var H5Schema = new mongoose.Schema({
    name:String,
    count:Number,
    activeTime:String
});

mongoose.model('H5Team',H5Schema);