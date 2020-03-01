import { GraphQLObjectType, GraphQLString } from 'graphql';

const userSchema = new GraphQLObjectType({
  name: 'user',
  fields: () => {
    return {
      first_name: {
        type: GraphQLString,
      },
      last_name: {
        type: GraphQLString,
      },
      email: {
        type: GraphQLString,
      },
    }
  }
});

export default userSchema;
