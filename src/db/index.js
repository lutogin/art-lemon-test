import mongoose from 'mongoose';
import { DB_URL } from '../config'

export default () => {
  mongoose.connect(DB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
    .then(() => console.log('Mongo DB connected.'))
    .catch((err) => console.error(err.message));
};
