export default function connect_DB(mongoose){
     if(mongoose.connection.readyState >= 1 ) return;
     mongoose.connect(
          process.env.MONGO_CON_STRING,
          {useCreateIndex:true, useUnifiedTopology:true, useNewUrlParser:true, useFindAndModify:false})
          .then(()=>console.log('Connected Succesfully'))
          .catch(err=>console.log(err))
}