// require('ts-node')
const { workerData, parentPort } = require('worker_threads')

require('../testeFolder/teste')

console.log('workerData', workerData)