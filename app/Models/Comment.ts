import { DateTime } from 'luxon'
import { BaseModel, HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Reply from './Reply'

export default class Comment extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public post_id: number

  @column()
  public comment_author: string

  @column()
  public comment_text: string

  @column()
  public comment_count: number

  @column.dateTime({ autoCreate: true })
  public created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updated_at: DateTime

  @hasMany(()=>Reply,{
    localKey:'id',
    foreignKey:'comment_id',
  })
  public replies : HasMany<typeof Reply>
}
