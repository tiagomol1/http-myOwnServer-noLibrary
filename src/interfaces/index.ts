import { ServerResponse, IncomingMessage } from "http"

export interface IRequest extends IncomingMessage {
    body: any
    params: any
}

export interface IResponse extends ServerResponse{}

export interface IMiddleware {
    (request: IRequest, response: ServerResponse, next?: INext): any | Promise<any>
}

export interface INext {
    (error?: Error): IMiddleware | Error
}

export interface IMiddlewareList {
    path: string
    method: "GET" | "POST" | "PUT" | "DELETE" | "*"
    middlewares: IMiddleware[]
}
