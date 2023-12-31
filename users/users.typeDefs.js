const typeDefs = `#graphql
  type User {
    id: String!
    username: String!
    email:String!
    name:String!
    location:String!
    avatarURL:String!
    githubUsername:String!
    createdAt:String!
    updatedAt:String!
  }
  type Mutation{
    createAccount(
      username:String!
      email:String!
      name:String!
      location:String!
      avatarURL:String!
      githubUsername:String!
      password:String!
    ):User
  }
  type Query {
    seeProfile(username: String!): User
  }
`;

export default typeDefs;
