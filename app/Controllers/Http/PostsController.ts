import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from "App/Models/Post"
import User from 'App/Models/User'
import Comment from 'App/Models/Comment'


export default class PostsController {
    public async index(){
       const upUser= await Post.query()
       .preload("reacts")
       .preload("comments",(replyQ)=>{
        replyQ.preload("replies")
        }).orderBy('posts.id', 'desc')
       return upUser
    }

    public async store({request}){
        const payload= await request.all()
        await Post.create({
            user_id:payload.user_id,
            post_desc:payload.post_desc,
            disabled:payload.disabled
        })
    }
    public async update({request,params}){
        const payload = await request.all()
        await Post.query().where('id',params.id).update({
            post_desc:payload.post_desc
        })
    }
    public async delete({params}){
        const post = await Post.findOrFail(params.id)
        await post.delete()
    }
}
