import { useRouter } from "next/router";
import HeroBanner from "../../components/HeroBanner";
import Layout from "../../components/Layout";
import Head from "next/head";
import Header from "../../components/Header";

const Category = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <Layout>
      <Head>
        <title>{slug ? slug : "Joezer Designs"}</title>
      </Head>
      <HeroBanner imgSrc="/images/hero-image.jpg">
        <Header as="h1">{slug}</Header>
      </HeroBanner>
    </Layout>
  );
};

export default Category;
