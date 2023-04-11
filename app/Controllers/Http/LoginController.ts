// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContext } from "@adonisjs/core/build/standalone";

export default class LoginController {
  public async store({ auth, request}){
    const payload = request.all()
  
    const email = payload.email
    const password = payload.password
    return await auth.use('api').attempt(email, password)
  }
}
