const { User } = require("../Model");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (a, b, c) => {
      if (c.user) {
        const data = await User.findOne({ _id: c.user._id }).select(
          "-__v -password"
        );
        return data;
      }
      throw new AuthenticationError("Not signed In.");
    },
  },
  
  Mutation: {
      addUser: async (a, b)=>{
          console.log('addUser called')
          const user = await User.create(b)
          const token = signToken(user)
          return {token, user}
        },
        login: async (a, {email, password})=>{
            const user = await User.findOne({email});
            if (!user){
                throw new AuthenticationError('Incorrect Email!')
            }
            const passwordValid = await user.isCorrectPassword(password)
            
            if(!passwordValid){
                throw new AuthenticationError('Incorrect Password!')
            }
            
            const token = signToken(user)
            return {token, user}
        }
  } 
};
    
    module.exports = resolvers;
    