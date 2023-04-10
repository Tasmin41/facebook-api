// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from "App/Models/User"

export default class UsersController {
  public async index(){
    const user= await User.all()
    console.log(user)
    return user
 }
  public async store({request}){
    const payload= await request.all()

    try {
      return await User.create({
        name:payload.name,
        email:payload.email,
        password:payload.password,
    })
    } catch (error) {
      console.log(error,'error')
    }
}

}
