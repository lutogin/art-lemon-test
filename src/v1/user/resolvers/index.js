import User from '../model';

const resolvers = {
  Query: {
    Users: async () => {
      return User.find();
    },
    User: async (root, condition) => {
      return User.findOne(condition);
    },
  },
  Mutation: {
    addUser: async (root, data) => {
      return User.create(data);
    },
    updateUser: async (root, data) => {
      return User.updateOne({ _id: data.id }, { update_at: Date.now(), ...data} );
    },
    deleteUser: async (root, { id }) => {
      return User.findByIdAndRemove(id);
    },
  }
};

export default resolvers;
