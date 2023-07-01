# http-myOwnServer-noLibrary
Simple server without dependencies, only native resources of Node.js - Idea based on express but created with Typescript

Obs: Don't use on production, this is just an example. Something I wanted to create to understand how express works deeply, but without many resources.

#### It's simple, see bellow example or navigate to a more complete example on path ./example

```typescript
import app from '../src' // here would be the library import, but in this case it's the original file of my own server config.

const server = app.createServer()
const routes = new app.Routes()

routes.get('/api/v1/users', (request, response) => {
  //your code...
})
routes.post('/api/v1/users', (request, response) => {
  //your code...
})

server.use(routes)
server.listen(3333, () => console.log('> Server is Running on port 3333'))
```
