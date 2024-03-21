import  express  from "express";
import * as taskService from "../services/tasks_service";

const router = express.Router();

router.get('/', (_req, res) => {
   res.send(taskService.getEntries())
})

router.post('/post', (_req, res) => {
    res.send(' Holaa desde POST')
})

export default router;