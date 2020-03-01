import { GraphQLObjectType, GraphQLList } from 'graphql';
import UserModel from '../../model';
import userType from '../schema';

export default new GraphQLObjectType({
  name: 'Query',
  fields: () => {
    return {
      users: {
        type: new GraphQLList(userType),
        resolve: () => {
          const users = UserModel.find().exec();
          if (!users) {
            throw new Error('Error on get user.');
          }

          return users;
        }
      }
    }
  }
});

