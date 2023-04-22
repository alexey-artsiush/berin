import A from "./A";
import Head from "next/head";

const MainContainer = ({children, keywords}) => {
    return (
        <>
            <Head>
                <meta keywords={"ulbi tv, nextjs" + keywords}></meta>
                <title>Главная страница</title>
            </Head>
            <div>
                {children}
            </div>
        </>
    );
};

export default MainContainer;
