import "../styles/globals.css";
import { Provider } from 'react-redux'
import store from "../redux/index"
import Layout from "@/components/Layout";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";


const App = ({ Component, pageProps }) => {

  const theme = createTheme({
    palette: {
      mode: 'light',
      default: {
        main: '#1a1a1a',
      },
    }})

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </Provider>
    </ThemeProvider>
  );
};
export default App
