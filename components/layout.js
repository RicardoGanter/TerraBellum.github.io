import Head from "next/head";
import Header from "./Header.js";

const Layout = ()=>{
    return(
        <>
            <Head>
            <title>TerraBellum </title>
            </Head>  
            <Header/>
        </>
    )
};

export default Layout;