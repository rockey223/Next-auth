import axios from "axios";
import NextAuth from "next-auth";
import Credential from "next-auth/providers/credentials";
import google from "next-auth/providers/google"
import github from "next-auth/providers/github"
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credential({
      name: "credential",
      credentials: {
        email: { type: "email" },
        password: { type: "password" },
      },
      authorize: async (credentials) => {
        try{

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
        }catch(err){
          console.log("errrr", err.response.data);
          
          throw new Error("Invalid credentialssss")
        }
      },
    }),
    google({
      clientId: "asdfkjhagsdkfjhga",
      clientSecret: "aljkshdfkjhg"
    }),
    github({
      clientId: "asdfkjhagsdkfjhga",
      clientSecret: "aljkshdfkjhg"
    }),

  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      // console.log("sueeee", user);
      
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.token = user.token; // Add token to JWT payload
      }
      return token;
    },
    async session({ session, token }) {
      // console.log("tooken",token);
      
      session.user = {
        id: token.id,
        email: token.email,
        name: token.name,
        accessToken: token.token,
        refreshToken: token.token,
        hello: "this is token"
      };
      return session;
    },
  },
});
