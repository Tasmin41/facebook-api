import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column ,HasMany,hasMany,hasOne,HasOne} from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import React from './React'
import Comment from './Comment'

export default class Post extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public user_id: string

  @column()
  public post_desc: string

  @column()
  public disabled: boolean


  @column.dateTime({ autoCreate: true })
  public created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updated_at: DateTime

  // @belongsTo(()=>User,{
  //   localKey:'user_id'
  // })
  // public user:BelongsTo<typeof User>
  @hasMany(() => Comment, {
    localKey: 'id', 
    foreignKey: 'post_id',
  })
  public comments: HasMany<typeof Comment>



  @hasMany(() => React, {
    localKey: 'id', 
    foreignKey: 'post_id', // defaults to id
  })
  public reacts: HasMany<typeof React>


}
