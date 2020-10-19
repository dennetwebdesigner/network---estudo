import express from 'express'
import cors from 'cors'
import { router } from './v1'

import './database'

class App {
  constructor() {
    this.server = express()
    this.middleware()
    this.routes()
  }

  middleware() {
    this.server.use(express.json())
    this.server.use(cors())
  }

  routes() {
    this.server.use('/v1', router)
  }
}

export default new App().server
