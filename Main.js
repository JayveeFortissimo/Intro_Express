import express from 'express';
import indexs from './Routes/index.js'

//port
const port = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.get("/",(req,res)=>{

    res.json("Main Body")
})


app.use('/api/datas',indexs);
app.use('/api/datas/',indexs)







app.listen(port,()=> console.log("Port Activated"))