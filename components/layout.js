import Head from "next/head";
import Header from "./Header.js";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title></title>
        <meta name="sus" />
      </Head>
        <Header />
          {children}
    </>
  );
};

export default Layout;
