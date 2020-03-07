import { makeExecutableSchema } from 'apollo-server-express';
import resolvers from '../resolvers';

const typeDefs =`
    type User {
      id: ID!
      first_name: String
      last_name: String
      email: String
    }
    type Query {
      Users: [User]
      User(id: ID, first_name: String, last_name: String, email: String): User
    }
    type Mutation {
      addUser(first_name: String, last_name: String!, email: String!): User,
      updateUser(id: ID!, first_name: String!, last_name: String!, email: String!): User,
      deleteUser(id: ID!): User,
    }
    type Subscription {
      userAdded: User,
      userEdited: User,
      userDeleted: User
    }
    `;

const userSchema = makeExecutableSchema({ typeDefs, resolvers });

export { typeDefs, resolvers };

export default userSchema;
