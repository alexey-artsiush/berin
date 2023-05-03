import "../styles/globals.css";
import { Provider } from 'react-redux'
import store from "../redux/index"
import Layout from "@/components/Layout";


const App = ({ Component, pageProps }) => {
  return (
    <>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </Provider>
    </>
  );
};
export default App
