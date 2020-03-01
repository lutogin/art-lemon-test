import { GraphQLNonNull, GraphQLString } from 'graphql';
import userSchema from '../schema';
import UserModel from '../../model';

/**
 * Mutation create User.
 * @type args:
 * {
 *    first_name: {type: GraphQLNonNull<GraphQLNullableType>},
 *    last_name: {type: GraphQLNonNull<GraphQLNullableType>},
 *    email: {type: GraphQLNonNull<GraphQLNullableType>}
 * }
 */
const createUser = {
  type: userSchema,
  args: {
    first_name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    last_name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
    }
  },
  resolve(root, params) {
    const user = new UserModel(params);
    const newUser = user.save();
    if (!newUser) {
      throw new Error('Error on creating user.');
    }
    return newUser;
  }
};

/**
 * Mutation reading User.
 * @type {{args: {id: {type: GraphQLNonNull<GraphQLNullableType>}} }}
 * TODO: Есть сомнения в необходимости этого метода в мутациях, т.к. пользователя можем получить в query.
 */
const readUser = {
  type: userSchema,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
    }
  },
  resolve(root, params) {
    const user = UserModel.findById(params.id).exec();
    if (!user) {
      throw new Error('Error on get user by id.');
    }
    return user;
  }
};

/**
 * Mutation update User.
 * @type args:
 * {
 *    id: {name: string, type: GraphQLNonNull<GraphQLNullableType>},
 *    first_name: {type: GraphQLNonNull<GraphQLNullableType>},
 *    last_name: {type: GraphQLNonNull<GraphQLNullableType>},
 *    email: {type: GraphQLNonNull<GraphQLNullableType>}
 * }
 */
const updateUser = {
  type: userSchema,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLString)
    },
    first_name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    last_name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
    }
  },
  resolve(root, params) {
    const { id, first_name, last_name, email } = params;
    return UserModel.findByIdAndUpdate(
      id,
      { $set: { first_name, last_name, email } },
      { new: true }
    )
      .catch(err => new Error(err));
  }
};

/**
 * Mutation delete User.
 * @type {{args: {id: {type: GraphQLNonNull<GraphQLNullableType>}} }}
 */
const deleteUser = {
  type: userSchema,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve(root, params) {
    const removedUser = UserModel.findByIdAndRemove(params.id).exec();
    if (!removedUser) {
      throw new Error('Error on remove user.');
    }
    return removedUser;
  }
};

export default {
  createUser,
  readUser,
  updateUser,
  deleteUser,
};
