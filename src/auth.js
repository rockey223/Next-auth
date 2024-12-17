import axios from "axios";
import NextAuth from "next-auth";
import Credential from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credential({
      name: "credential",
      credentials: {
        email: { type: "email" },
        password: { type: "password" },
      },
      authorize: async (credentials) => {
        const { email, password } = credentials;
        console.log("auth", credentials);
        const user = { id: 1 };
        const res = await axios.post(
          "http://localhost:5000/customerApi/customerLogin",
          {
            email,
            password,
          }
        );
        console.log("auth res", res.data);

        if (res.data && res.data.success) {
          // Map the response to user object
          return {
            // id: res.data.customer._id,
            email: res.data.customer.email,
            name: res.data.customer.userName,
            token: res.data.token
          };
        }

        // Return null if authentication fails
        return null;
      },
    }),
  ],
  // session: {
  //   strategy: "jwt",
  // },
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      return {...token,...user}
    },
    async session({ session, token,user }) {
      session.user = token;
      return session
    },
  },
});
