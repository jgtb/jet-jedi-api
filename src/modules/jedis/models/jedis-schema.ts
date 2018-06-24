import { NextFunction } from 'express'
import { model, Schema } from 'mongoose'
import * as mongoosePaginate from 'mongoose-paginate'

import jedisModel from './jedis-model'

const jedisSchema: Schema = new Schema(jedisModel, { 
  timestamps: true 
})

jedisSchema.plugin(mongoosePaginate)

const JedisSchema = model('jedis', jedisSchema)

export default JedisSchema
