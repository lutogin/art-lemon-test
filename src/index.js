import express from 'express';
import graphqlHTTP from 'express-graphql';
import cors from 'cors';

import { HOST, PORT } from './config';
import connection from './db';
import userSchema from './user/graphql';

const app = express();
connection();

app.use('*', cors());

app.use('/', cors(), graphqlHTTP({
  schema: userSchema,
  rootValue: global,
  graphiql: true
}));

app.listen(PORT, () => {
  console.log(`🚀  Server ready at ${HOST}:${PORT}`);
});
