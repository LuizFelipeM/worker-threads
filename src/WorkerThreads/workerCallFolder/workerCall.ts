import path from 'path'
import { Worker } from 'worker_threads'

function workerCall(): Promise<unknown> {
  return new Promise<unknown>((resolve, reject) => {
    const workerPath = path.resolve(__dirname, '..', 'WorkerTest', 'script.js')
    const worker = new Worker(workerPath, { workerData: { msg: 'texto', status: 'ok' } })

    console.log('workerPath', workerPath)

    worker.on('message', (message: unknown) => {
      console.log('message', message)
      resolve(message)
    })
    worker.on('error', (error: unknown) => {
      console.log('error', error)
      reject(error)
    })
    worker.on('exit', (code: number) => {
      if(code !== 0)
        reject(new Error(`Worker Thread stopped with exit coed ${code}`))
    })
  })
}

export default workerCall;