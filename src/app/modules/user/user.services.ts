import ApiError from '../../../Error/ApiError';
import config from '../../../config';
import { IUser } from './user.interface';
import { User } from './user.model';
import { generateUserId } from './user.utils';

const createUser = async (user: IUser): Promise<IUser | null> => {
  // auto genarated incremental id
  const id = await generateUserId();
  user.id = id;
  // default password
  if (!user.password) {
    user.password = config.default_user_pass as string;
  }
  const createdUser = await User.create(user);
  if (!createUser) {
    throw new ApiError(400, 'failed to create user');
  }
  return createdUser;
};

export const UserService = {
  createUser,
};
