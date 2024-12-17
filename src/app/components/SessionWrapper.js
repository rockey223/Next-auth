"use client";
import { SessionProvider } from "next-auth/react";

const SessionWrapper = ({ children }) => {
    console.log('session wqrapper');
    
  return <SessionProvider>{children}</SessionProvider>;
};

export default SessionWrapper;
