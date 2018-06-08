import * as yup from "yup";

import { default as User } from "../../../entity/User";
import { ResolverMap } from "../../../types/graphql-utils";
import { formatYupError } from "../../../utils/formatYupError";
import { registerPasswordValidation } from "../../../yupSchemas";
import {
  duplicateEmail,
  emailNotLongEnough,
  invalidEmail
} from "./errorMessages";
// import { createConfirmEmailLink } from "../../utils/createConfirmEmailLink";
// import { sendEmail } from "../../utils/sendEmail";

const schema = yup.object().shape({
  email: yup
    .string()
    .min(3, emailNotLongEnough)
    .max(255)
    .email(invalidEmail),
  password: registerPasswordValidation
});

export const resolvers: ResolverMap = {
  Mutation: {
    register: async (
      _,
      args: GQL.IRegisterOnMutationArguments
      // { redis, url }
    ) => {
      try {
        await schema.validate(args, { abortEarly: false });
      } catch (err) {
        return formatYupError(err);
      }

      const { email, password } = args;

      const userAlreadyExists = await User.findOne({
        email
      });

      if (userAlreadyExists) {
        return [
          {
            path: "email",
            message: duplicateEmail
          }
        ];
      }

      const user = new User({
        email,
        password
      });

      await user.save();

      // if (process.env.NODE_ENV !== "test") {
      //   await sendEmail(
      //     email,
      //     await createConfirmEmailLink(url, user.id, redis)
      //   );
      // }

      return undefined;
    }
  }
};
