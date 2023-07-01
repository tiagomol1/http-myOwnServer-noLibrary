import app from './my-own-simple-http-server'
import Users from './controllers/users'

const routes = new app.Routes()

routes.get('/api/v1/users', Users.listUsers)
routes.post('/api/v1/users', Users.createUser)

export { routes }