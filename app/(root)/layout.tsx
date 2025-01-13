import Navbar from "@/components/navigation/navbar";
import React, { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="bg-black">
      <Navbar />
      {children}
    </main>
  );
};

export default RootLayout;
