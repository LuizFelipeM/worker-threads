import express from 'express'
import {parentPort} from 'worker_threads'

console.log('express.name', express.name)

parentPort?.postMessage({ teste: 'qualquer coisa'})