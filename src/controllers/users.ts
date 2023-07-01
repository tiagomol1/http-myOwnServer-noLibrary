import { IRequest, IResponse } from '../my-own-simple-http-server'
import { db } from '../database/db'

async function createUser(request: IRequest, response: IResponse){

    const { name } = request.body
    
    //simulate database delay
    await new Promise(resolve => setTimeout(resolve, 100))
    db.users.push({
        id: db.users.length + 1,
        name
    })

    response.writeHead(200, {'Content-Type': 'application/json'})
    return response.end(JSON.stringify(db.users))

}

async function listUsers(request: IRequest, response: IResponse){

    //simulate database delay
    await new Promise(resolve => setTimeout(resolve, 100))

    response.writeHead(200, {'Content-Type': 'application/json'})
    return response.end(JSON.stringify(db.users))

}


export default {
    createUser,
    listUsers
}