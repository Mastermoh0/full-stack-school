import { getAuth } from "@clerk/nextjs/server";
import { headers } from "next/headers";

export const getCurrentUser = () => {
  const headersList = headers();
  const auth = getAuth(headersList);
  
  return {
    userId: auth.userId,
    sessionClaims: auth.sessionClaims,
    role: (auth.sessionClaims?.metadata as { role?: string })?.role
  };
};