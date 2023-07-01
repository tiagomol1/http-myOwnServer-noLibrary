import { IMiddleware, IMiddlewareList } from './interfaces'

export class Routes {
    listRoutes: IMiddlewareList[] = []

    get(path: string, ...middleware: IMiddleware[]) {
        this.listRoutes.push({
            path,
            method: "GET",
            middlewares: middleware,
        })
    }

    post(path: string, ...middleware: IMiddleware[]) {
        this.listRoutes.push({
            path,
            method: "POST",
            middlewares: middleware,
        })
    }

    put(path: string, ...middleware: IMiddleware[]) {
        this.listRoutes.push({
            path,
            method: "PUT",
            middlewares: middleware,
        })
    }

    delete(path: string, ...middleware: IMiddleware[]) {
        this.listRoutes.push({
            path,
            method: "DELETE",
            middlewares: middleware,
        })
    }
}
