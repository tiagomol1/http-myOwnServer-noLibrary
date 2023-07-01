import app from '../src'
import { routes } from './routes'

const server = app.createServer()

server.use(routes)

server.listen(3333, () => console.log('> Server is Running on port 3333'))

