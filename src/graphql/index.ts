import { ApolloServer } from "@apollo/server";
import { User } from "./user";
async function createApolloGraphqlserver() {
  const gqlServer = new ApolloServer({
    typeDefs: `
        type Query{
          hello: String
          ${User.queries}
        }
        type Mutation {
          ${User.mutations}
        }
    `,
    resolvers: {
      Query: {
        ...User.resolvers.queries,
      },
      Mutation: {
        ...User.resolvers.mutations,
      },
    },
  });

  await gqlServer.start();

  return gqlServer;
}

export default createApolloGraphqlserver;
