import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/react.png"/>
      </Head>
      
      <div className={styles.container}>
      <Header/>
      <main className={styles.main}>
        <h2>El cigarrillo y la nicotina</h2>
        <p>El cigarrillo es un producto de consumo que contiene nicotina, una sustancia altamente adictiva. La adiccion al tabaco afecta a millones de peronas en todo el Mundo, causando graves problemas en la salud.</p>
      </main>
      <Footer/>
      </div>
    </>
  );
}
