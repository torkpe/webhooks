import express from 'express';
import middlewares from './routes/middleware';
import route from './routes';

const app = express();

middlewares(app);
route(app);

app.listen(process.env.PORT,(err)=>{
  if(err) throw err;
  console.log(`======${process.env.NODE_ENV} server started on port ${process.env.PORT}============`);
});

// process.on("SIGINT",()=>console.log("App closed"));