import { Model } from 'mongoose';

export type IUser = {
  id: string;
  role: string;
  password: string | number;
};
export type UserModel = Model<IUser, object>; //!---using object
// export type UserModel = Model<IUser, Record<string, unknown>> //using record
