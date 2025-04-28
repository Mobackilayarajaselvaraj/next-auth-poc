// src/auth.ts

import { NextAuthOptions } from "next-auth";
import AzureADProvider from "next-auth/providers/azure-ad";


export const authOptions: NextAuthOptions = {
  providers: [
    AzureADProvider({
        clientId: process.env.AZURE_AD_CLIENT_ID!,
        clientSecret: process.env.AZURE_AD_CLIENT_SECRET!,
        tenantId: process.env.AZURE_AD_TENANT_ID,
        authorization: {
            params: {
              scope: "openid email profile User.Read offline_access",
            },
          },
          // Request additional claims
          profile(profile) {
            console.log(profile);
            
            return {
              id: profile.sub,
              name: profile.name,
              email: profile.email || profile.preferred_username,
              image: null,
              // Add any additional fields you need
              roles: profile.roles || [],
              tenantId: profile.tid,
            };
          },
        
      }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      return session;
    },
  },
  // Add this section to enable complete sign out
  events: {
    async signOut({ token }) {
      // This will be called when a user signs out
    }
  },
};
