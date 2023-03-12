import Head from "next/head";
import Footer from "./footer.js";
import Header from "./Header.js";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title></title>
        <meta name="sus" />
      </Head>
        <Header />
        <body>
        <div style={{ margin: "80px 100px 0 100px" }}>{children}</div>
        </body>
        <Footer></Footer>
    </>
  );
};

export default Layout;
