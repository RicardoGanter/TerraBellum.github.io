import Head from "next/head";
import Header from "./Header.js";


const Layout = ({children,titulo})=>{
    return(
        <>
            <Head>
            <title>TerraBellum - {titulo}</title>
            </Head>
            
            <Header/>

            {children}
        </>
    )
};

export default Layout;