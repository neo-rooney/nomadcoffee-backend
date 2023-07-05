import bcrypt from "bcrypt";
import client from "../client.js";

export default {
  Mutation: {
    createAccount: async (
      _,
      { username, email, name, location, avatarURL, githubUsername, password }
    ) => {
      try {
        // check if username or email are already on DB.
        const existingUser = await client.user.findFirst({
          where: {
            OR: [
              {
                username,
              },
              {
                email,
              },
            ],
          },
        });

        if (existingUser) {
          throw new Error("This username/password is already taken.");
        }

        // hash password
        const uglyPassword = await bcrypt.hash(password, 10);

        // save and return the user
        return await client.user.create({
          data: {
            username,
            email,
            name,
            location,
            avatarURL,
            githubUsername,
            password: uglyPassword,
          },
        });
      } catch (e) {
        return {
          ok: false,
          error: e,
        };
      }
    },
  },
};
