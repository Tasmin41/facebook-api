import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateUserValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string(),
    email: schema.string([
       //@ts-ignore
      rules.email()
    ]),
    password: schema.string([
       //@ts-ignore
      rules.minLength(4)
    ])
  })


  public messages: CustomMessages = {}
}
