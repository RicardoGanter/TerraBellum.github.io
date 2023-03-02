import Head from "next/head";
import Footer from "./footer.js";
import Header from "./Header.js";

// const Layout = ()=>{
//     return(
//         <>
//             <Head>
//             <title>TerraBellum </title>
//             </Head>
//             <Header/>
//         </>
//     )
// };

// export default Layout;

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title></title>
        <meta name="sus" />
      </Head>
      <main>
        <Header />
        <div style={{ margin: "80px 400px 0 400px" }}>{children}</div>
        <Footer></Footer>
      </main>
    </>
  );
};

export default Layout;
