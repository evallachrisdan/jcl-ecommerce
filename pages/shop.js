import Layout from "../components/Layout";
import Head from "next/head";
import Button from "../components/Button";
import HeroBanner from "../components/HeroBanner";
import Header from "../components/Header";

function Shop() {
  return (
    <Layout>
      <Head>
        <title>Shop</title>
      </Head>
      <HeroBanner imgSrc="/images/hero-image.jpg">
        <Header as="h1">Shop</Header>
      </HeroBanner>
    </Layout>
  );
}

export default Shop;
