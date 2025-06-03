// pages/_app.js
import { SessionProvider } from "next-auth/react";
import { getSession } from "next-auth/react";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session, // Pass session as prop to your page components
    },
  };
}

export default MyApp;
