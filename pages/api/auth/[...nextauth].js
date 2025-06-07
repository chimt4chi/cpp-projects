import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connectToDatabase from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectToDatabase();

        const user = await User.findOne({ email: credentials.email });
        if (!user) {
          throw new Error("No user found");
        }

        const isValid = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isValid) {
          throw new Error("Invalid password");
        }

        return {
          id: user._id.toString(), // Convert ObjectId to string
          email: user.email,
          name: user.name,
          role: user.role, // ✅ Add this
        };
      },
    }),
  ],
  // ADD THESE CALLBACKS - This is what was missing!
  callbacks: {
    async jwt({ token, user }) {
      // When user signs in, add their ID to the token
      if (user) {
        token.id = user.id;
        token.role = user.role; // ✅ Add role to token
      }
      return token;
    },
    async session({ session, token }) {
      // Add user ID from token to session
      if (token) {
        session.user.id = token.id;
        session.user.role = token.role; // ✅ Add role to session
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/login", // your custom login page
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
