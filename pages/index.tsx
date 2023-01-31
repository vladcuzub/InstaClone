import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Header from "../components/Header";
import Feed from "../components/Feed";
import Login from "@/components/Login";



export default function Home() {
  return (
    <>
      <Head>
        <title>Insta Clone</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://cdn-icons-png.flaticon.com/512/87/87390.png"
        />
      </Head>
      <Header />
      <Feed />
    </>
  );
}
