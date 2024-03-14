import NextAuth from "next-auth";
import { authConfig } from "./lib/auth.Config";

export default NextAuth(authConfig).auth;

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next).*)"],
};
