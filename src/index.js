import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { HOST, PORT } from './config';
import userSchema from './v1/user/schema';
import connection from './db';

const app = express();
connection(); // Connect to DB.

const apolloServer = new ApolloServer({ schema: userSchema });
apolloServer.applyMiddleware({ app });

app.listen(PORT, () => {
  console.log(`🚀  Server ready at ${HOST}:${PORT}${apolloServer.graphqlPath}`);
});
