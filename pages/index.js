import Layout from "../components/Layout";
import Container from "../components/Container";
import Head from "next/head";
import HeroBanner from "../components/HeroBanner";
import Header from "../components/Header";
import Divider from "../components/Divider";
import Grid from "../components/Grid";
import ProductCard from "../components/ProductCard";
import ProductItemCard from "../components/ProductItemCard";
import Newsletter from "../components/Newsletter";
import Link from "next/link";
import Slider from "../components/Slider";

function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Joezer</title>
      </Head>
      <HeroBanner imgSrc="/images/hero-image.jpg">
        <Header className="mb-5" as="h1">
          Excellence in Every Design.
        </Header>
        <Link href="/shop">
          <a className="btn text-lg bg-black px-8 py-2 text-white uppercase muli-light">
            Shop Now
          </a>
        </Link>
      </HeroBanner>
      <Container className="text-center py-8">
        <Header as="h2" className="uppercase">
          About Us
        </Header>
        <Divider></Divider>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
          pariatur dignissimos eius quam non ratione sed omnis aliquam velit
          repudiandae? Placeat praesentium alias quod, eligendi nam libero
          repellat recusandae ex vel, aut excepturi incidunt maxime. Amet quod
          ullam recusandae optio!
        </p>
      </Container>
      <Container className="text-center py-8">
        <Header as="h2" className="uppercase">
          Our Products
        </Header>
        <Divider></Divider>
        <Grid className="lg:grid-cols-3 md:grid-cols-1 mx-auto gap-4 my-5">
          <ProductCard title="WALLETS">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
              temporibus!
            </p>
            <p className="my-8">
              <Link href="/products/wallets">
                <a className="btn bg-white-500 border border-black hover:bg-black hover:text-white text-black font-bold py-2 px-5 uppercase">
                  Discover
                </a>
              </Link>
            </p>
          </ProductCard>
          <ProductCard title="ACCESSORIES">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
              temporibus!
            </p>
            <p className="my-8">
              <Link href="/products/accessories">
                <a className="btn bg-white-500 border border-black hover:bg-black hover:text-white text-black font-bold py-2 px-5 uppercase">
                  Discover
                </a>
              </Link>
            </p>
          </ProductCard>
          <ProductCard title="BAGS">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
              temporibus!
            </p>
            <p className="my-8">
              <Link href="/products/bags">
                <a className="btn bg-white-500 border border-black hover:bg-black hover:text-white text-black font-bold py-2 px-5 uppercase">
                  Discover
                </a>
              </Link>
            </p>
          </ProductCard>
        </Grid>
      </Container>
      <Container className="text-center py-8">
        <Header as="h2" className="uppercase">
          Featured Items
        </Header>
        <Divider></Divider>

        <Slider>
          <ProductItemCard
            imgSrc="/images/bags/bags-kara.png"
            itemTitle="Kara"
            itemPrice="$2000"
          />
          <ProductItemCard
            imgSrc="/images/bags/bags-kara.png"
            itemTitle="Sophie"
            itemPrice="$2000"
          />
          <ProductItemCard
            imgSrc="/images/bags/bags-kara.png"
            itemTitle="Martin"
            itemPrice="$2000"
          />
          <ProductItemCard
            imgSrc="/images/bags/bags-kara.png"
            itemTitle="Don"
            itemPrice="$2000"
          />
        </Slider>
      </Container>
      <Newsletter />
    </Layout>
  );
}

export default HomePage;
