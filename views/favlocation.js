

console.log("+++++");


// const User = require('./models/User');
find({},function(err,users){
    if(err) 
    console.log(err);
    console.log(users);
})

