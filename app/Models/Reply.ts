import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Reply extends BaseModel {
  @column({ isPrimary: true })
  public id: number

    @column()
  public post_id: number

    @column()
  public comment_id: number

    @column()
  public reply_text: string

      @column()
  public reply_author: string

  @column.dateTime({ autoCreate: true })
  public created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updated_at: DateTime
}
