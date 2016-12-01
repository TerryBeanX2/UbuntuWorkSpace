var mongoose = require('mongoose');
require('./model');
var Team = mongoose.model('H5Team');
var cond = {
    $or:[
        {name:'CSS team'},
        {count:666}
    ]
};

Team.find(cond,function(err,doc){
    if(err){
        console.log('err:',err);
        return;
    }
    console.log(doc);
});