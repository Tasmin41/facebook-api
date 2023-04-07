// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Reply from "App/Models/Reply"

export default class RepliesController {
    public async store({response,request}){
        const payload= await request.all()

        await Reply.create({
            post_id:payload.post_id,
            comment_id:payload.comment_id,
            reply_text:payload.reply_text,
        })
    }
}
