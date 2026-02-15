import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60,
    updateAge: 2 * 60 * 60,
  },
  callbacks: {
    async signIn({ user }) {
      console.log(user);
      return user.email === process.env.ADMIN_EMAIL; // lock to you
    },
  },
});

export { handler as GET, handler as POST };
