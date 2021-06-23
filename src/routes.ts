import { Router, Response, Request, response } from "express";
import workerCall from "./WorkerThreads/workerCallFolder/workerCall";


const routes = Router()

routes.get('/', async (req: Request, res: Response) => {
  const a = await workerCall();
  res.json(a)
})

export default routes