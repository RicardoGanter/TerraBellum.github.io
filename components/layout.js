import Head from "next/head";
import Header from "./Header.js";


const Layout = ({children,titulo})=>{
    return(
        <div>
            <Head>
            <title>TerraBellum - {titulo}</title>
            </Head>
            
            <Header/>

            {children}
        </div>
    )
};

export default Layout;