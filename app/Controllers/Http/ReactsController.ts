// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Comment from "App/Models/Comment"
import React from "App/Models/React"

export default class ReactsController {
    public async store({response,request}){
        const payload= await request.all()
        await React.create({
            post_id:payload.post_id,
            total_react:payload.total_react,
        })
    }
    public async update({response,request,params}){
        const payload = await request.all()
        await React.query().where('post_id',params.id).update({
            total_react:payload.total_react
        })
    }
}
