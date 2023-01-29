import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import axios from "axios";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn(user, account, profile) {
      // console.log(user, account, profile);
      const { email, name, image } = user.user;
      const payload = {
        name,
        email,
        image,
      };
      // console.log(user.user);
      console.log(payload);
      try {
        const {data} = await axios({
          url: "http://localhost:3000/api/add-user",
          method: "POST",
          data: payload,
        }) 
        console.log(data);
      } catch (error) {
        console.log(error);
      }
      return true;
    },
  },
});
