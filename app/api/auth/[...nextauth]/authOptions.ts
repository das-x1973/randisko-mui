// app/api/auth/[...nextauth]/authOptions.ts

import { NextAuthOptions, DefaultSession } from "next-auth";
import prisma from '@/prisma/client';
import { PrismaAdapter } from "@next-auth/prisma-adapter";


import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import InstagramProvider from "next-auth/providers/instagram";
import TwitterProvider from "next-auth/providers/twitter";
import LinkedInProvider from "next-auth/providers/linkedin";
import EmailProvider from "next-auth/providers/email"
import sendVerificationRequest from "../../../auth/overitEmail/sendVerificationRequest";

declare module "next-auth" {
  /**
   * Extends the built-in session types to include user ID.
   */
  interface Session {
    user?: {
      id?: string;
    } & DefaultSession["user"];
  }
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      server: {
        host: 'smtp.sendgrid.net',
        port: 587,
        auth: {
          user: 'apikey', // SendGrid requires this user
          pass: process.env.SENDGRID_API_KEY,
        },
      },
      from: process.env.EMAIL_FROM,
      sendVerificationRequest,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
    }),
    InstagramProvider({
      clientId: process.env.INSTAGRAM_CLIENT_ID,
      clientSecret: process.env.INSTAGRAM_CLIENT_SECRET
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_ID!,
      clientSecret: process.env.TWITTER_SECRET!,
      // version: "2.0", // opt-in to Twitter OAuth 2.0
    }),
    LinkedInProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID!,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET!,
    }),
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
      // maxAge: 24 * 60 * 60, // How long email links are valid for (default 24h)
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/auth/prihlasenie',
    signOut: '/auth/odhlasenie',
    // error: '/auth/registracia', // Error code passed in query string as ?error=
    verifyRequest: '/auth/overitEmail',
    newUser: '/profil-uzivatela/zakladne-info' // If set, new users will be directed here on first sign in
  },
callbacks: {
  async jwt({ token, user }) {
    // Check if user exists and has an id, then assign it to token
    if (user?.id) {
      token.id = user.id.toString(); // Ensure it's a string
    }
    // console.log("JWT Callback - Token:", token);
    return token;
  },
  async session({ session, token }) {
    // Initialize session.user if not already defined
    session.user = session.user ?? {};

    // Ensure token.id is a string before assigning it
    if (typeof token.id === 'string') {
      session.user.id = token.id;
    }
    
    // console.log("Session Callback - Session:", session);
    return session;
  },
  async signIn({ user, account, profile, email, credentials }) {
    // Here you can write custom logic to execute on sign in
    // For example, you can allow or deny sign-in based on certain conditions
    // console.log("SignIn Callback - User:", user);
    return true; // Return true to allow sign-in, false to deny it
  },
  async redirect({ url, baseUrl }) {
    // This callback can be used to customize redirect after sign-in
    // console.log("Redirect Callback - URL:", url, "Base URL:", baseUrl);
    return baseUrl; // Redirect to the home page after successful sign-in
  },
  // ... Other callbacks
},
};
