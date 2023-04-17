import App from "next/app";
import "@/styles/globals.css";
import Layout from "@/components/Layout";

export default function MyApp({ Component, pageProps, navData }) {
  return (
    <Layout navData={navData}>
      <Component {...pageProps} />
    </Layout>
  );
}

// getInitialProps is actually an old way of fetching, but it's still the only method we can use in order to do server-side fetching inside _app
// And we need that if we need to fetch and use data for ex. our global Layout
//https://slides.com/mathiasdahljensen/deck-613e11#/14/1/0

MyApp.getInitialProps = async (appContext) => {
  // Provide the appContext, in order to do 404's <-- Mathias comment, IDK, leftover from someplace else?

  const url = "https://bucolic-bombolone-857476.netlify.app/api/dogs/";

  const appProps = await App.getInitialProps(appContext);
  const res = await fetch(url);
  const navData = await res.json();
  console.log("navData", navData);
  return { ...appProps, navData };
};
