import { NextFunction } from 'express'
import { model, Schema } from 'mongoose'
import { compareSync, genSalt, hash } from 'bcryptjs'

import usersModel from './users-model'

const usersSchema: Schema = new Schema(usersModel, { 
  timestamps: true 
})

usersSchema.pre('save', function(next: NextFunction) {
  const self: any = this
  if (!this.isModified('password')) return next()

  genSalt(10, (err: Error, salt: any) => {
    hash(self.password, salt, (err: Error, hash: string) => {
      err ? next(err) : (self.password = hash)
      next()
    })
  })
})

usersSchema.methods.comparePassword = (
  candidatePassword: string, 
  cb: any
) => compareSync(candidatePassword, this.password)

const UsersSchema = model('users', usersSchema)

export default UsersSchema
