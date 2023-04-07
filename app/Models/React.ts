import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class React extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public post_id: string

  @column()
  public profile_id: string

  @column()
  public total_react: number

  @column.dateTime({ autoCreate: true })
  public created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updated_at: DateTime
}
