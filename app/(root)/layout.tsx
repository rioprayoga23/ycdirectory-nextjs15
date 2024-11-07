import React from "react";

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main>
      <div></div>
      {children}
    </main>
  );
};

export default Layout;
