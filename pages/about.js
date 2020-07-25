import Layout from "../components/Layout";
import Head from "next/head";
import HeroBanner from "../components/HeroBanner";
import Container from "../components/Container";
import Header from "../components/Header";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>Joezer - About Us</title>
      </Head>
      <HeroBanner imgSrc="/images/hero-image.jpg">
        <Header as="h1">About Us.</Header>
      </HeroBanner>
      <Container className="py-8">
        <div>
          <h2 className="mb-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Laboriosam, quidem!
          </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus eum beatae eveniet maiores sapiente rerum animi
            accusantium, veritatis cupiditate nemo expedita ratione accusamus
            modi sint, fuga porro hic dignissimos debitis culpa vel. Ratione,
            minus voluptatem. Maiores harum magni ea animi!
          </p>
        </div>
      </Container>
    </Layout>
  );
}
