import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import queryType from './queries';
import userMutation from './mutations';

export default new GraphQLSchema({
  query: queryType,
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: userMutation,
  })
});
