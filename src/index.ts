import  express  from "express";
import task_router from "./routes/tasks"


const app = express();
app.use(express.json());
app.use('/tasks', task_router);
const PORT = 8000;

app.get('/api', (_req, res)=>{
    res.send("Service connected Stefani No se BAÑA")
})

app.listen(PORT,()=>{
    console.log(`Se conecto en http://localhost:${PORT}`);
    
})