import { Request, Response } from 'express';

import UserSchema from '../models/users-schema';

const getAllUsers = async (req: Request, res: Response) => {
  const users: any = await UserSchema.find({});
  res.status(200).json(users);
};

export default getAllUsers