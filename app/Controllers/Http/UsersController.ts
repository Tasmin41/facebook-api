// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from "App/Models/User"
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class UsersController {
  public async index(){
    const user= await User.all()
    console.log(user)
    return user
 }
  public async store({request,response}){
    const createUserSchema = schema.create({
      name: schema.string({trim:true},[
        rules.regex(/^[a-zA-Z-_]+$/)
      ]),
      email: schema.string([
        rules.email()
      ]),
      password: schema.string(),

    })
    const message ={
      "name.string":"fglghjf"
    }



    try {
    const payload= await request.validate({schema:createUserSchema,message})
      return await User.create({
        name:payload.name,
        email:payload.email,
        password:payload.password,
    })
    } catch (error) {
      if (error.code === 'E_VALIDATION_FAILURE') {
        return response.status(422).send(error.messages)
      }
    }
}

}
