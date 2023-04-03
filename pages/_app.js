import "../styles/globals.css";
import Layout from "@/components/Layout";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Layout>
        <main>
          <Component {...pageProps} />
        </main>
      </Layout>
    </>
  );
};

export default App;
