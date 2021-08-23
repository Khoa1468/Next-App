import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "../layouts/AppBar";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
