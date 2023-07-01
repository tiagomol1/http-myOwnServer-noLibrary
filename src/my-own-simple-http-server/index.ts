import http from 'http'
import url from 'url'
import { Routes } from './_router'
import { IMiddlewareList, IRequest, IResponse } from './interfaces'

function createServer() {
    const listMiddlewares: IMiddlewareList[] = []
    
    const server = http.createServer(async (request, response) => {

        const req = request as unknown as IRequest
        const res = response as unknown as IResponse

        if(!['GET', 'DELETE'].includes(request.method as string)){
            const body = await new Promise((resolve) => {
                let bodyString = ""
                req.on("data", (chunk) => (bodyString += chunk))
                req.on("end", () => bodyString ? resolve(JSON.parse(bodyString)) : null)
            })
            req.body = body
        }

        const endpoint = listMiddlewares.filter(middleware => {
            return req.method == middleware.method && req.url == middleware.path
        })
        
        if(endpoint.length > 0){
            return endpoint[0].middlewares.map((middleware) => {
                return middleware(req, res)
            })
        }else{
            res.writeHead(404, {'Content-Type': 'application/json'})
            return res.end()
        }

    })

    function use(...middleware: any) {
        if(middleware[0] instanceof Routes){
            middleware[0].listRoutes.map(mid => {
                listMiddlewares.push({
                    path: mid.path,
                    method: mid.method,
                    middlewares: mid.middlewares
                })
            })
        }
        listMiddlewares.push({
            path: '/',
            method: '*',
            middlewares: middleware
        })
    }

    function listen(port: number, func?: () => void) {
        server.listen(port, func)
    }

    return {
        use,
        listen,
    }
}

export default {
    createServer,
    Routes
}

export { IRequest, IResponse }