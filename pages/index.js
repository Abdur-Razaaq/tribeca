import Head from "next/head";
import Landing from "../components/Landing";
import Cards from "../components/Landing-Cards/landing-cards";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tribeca</title>
      </Head>
      <Landing />
      <Cards />
    </div>
  );
}
