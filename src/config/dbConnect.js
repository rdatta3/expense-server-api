
const mongoose = require('mongoose');

//aEP6ByA0IyW5gY3b
//mongodb+srv://raktima:<password>@expense-tracker.ybox2.mongodb.net/?retryWrites=true&w=majority

const dbConnect = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL,{
            
            useUnifiedTopology:true,
            useNewUrlParser:true,
});
    console.log(`DB connected successfully`);
}catch(error){
    console.log(`Error ${error.message}`);
}
};
module.exports=dbConnect;