import React from "react";
import { Logo } from "./_components/logo";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full flex flex-col items-center space-y-6 justify-center">
      <Logo />
      {children}
    </div>
  );
}

export default AuthLayout;
