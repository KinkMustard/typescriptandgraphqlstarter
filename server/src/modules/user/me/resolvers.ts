import { default as User } from "../../../entity/User";
import { ResolverMap } from "../../../types/graphql-utils";
import { createMiddleware } from "../../../utils/createMiddleware";
import middleware from "./middleware";

export const resolvers: ResolverMap = {
  Query: {
    findUser: async (_, { email }: GQL.ILoginOnMutationArguments) => {
      const user = await User.findOne({
        email
      });

      return user;
    }
  }
};
