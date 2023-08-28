import Image from "next/image";
import { Inter } from "next/font/google";
import LayoutsPages from "./layouts";
import Head from "next/head";
import NetflixLogo from "./../../public/Netflix_icon.ico";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Netflix Clone</title>
        <meta name="description" content="Netflix clone, made using Next.js" />
        <link rel="icon" href="./../../public/Netflix_icon.ico" />
      </Head>
      <LayoutsPages />
    </>
  );
}
