import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navigation from "@/components/Navigation";
import Hero from "../../public/image-hero-desktop.png";

import audiophile from "../../public/client-audiophile.svg"
import databiz from "../../public/client-databiz.svg"
import maker from "../../public/client-maker.svg"
import meet from "../../public/client-meet.svg"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Epilogue"
        ></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          alignSelf: "center",
          height: "100%",
          width: "80%",
        }}
      >
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "space-between", height: "50%"}}>
          <h1>Make<br />remote work</h1>
          <h2>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </h2>
          <button>Learn more</button>
          <div style={{display: "flex", width: "100%", justifyContent: "space-between"}}>
            <Image src={audiophile}/>
            <Image src={databiz} />
            <Image src={maker} />
            <Image src={meet} />
          </div>
        </div>
        <div style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
          <Image src={Hero} style={{ width: "50%", height: "auto" }} />
        </div>
      </div>
    </div>
  );
}
