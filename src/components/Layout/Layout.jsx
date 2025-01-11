import { Suspense } from "react";



const Layout = ({ children }) => {
  return <Suspense fallback="...is loading">{children}</Suspense>;
};

export default Layout;
