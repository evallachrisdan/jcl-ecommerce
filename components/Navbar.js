import Container from "./Container";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black text-white py-5 sticky top-0">
      <Container>
        <div className="float-left">
          <a href="tel:+63288888888">
            <i className="fas fa-phone-alt"></i> 8888-8888
          </a>
        </div>
        <div className="float-right">
          <Link href="/sign-in">
            <a className="mr-3">Sign in</a>
          </Link>
          <Link href="/wishlist">
            <a className="mr-3">
              <i className="far fa-heart"></i>
            </a>
          </Link>
          <Link href="/cart">
            <a>
              <i className="fas fa-shopping-bag"></i>
            </a>
          </Link>
        </div>
      </Container>
      <Container className="text-center">
        <Link href="/">
          <a className="navbar-brand mx-auto tangerine-bold">Joezer</a>
        </Link>
      </Container>
      <Container>
        <div className="text-center mx-auto my-2">
          <ul className="inline-flex">
            <li className="mx-3">
              <Link href="/about">
                <a className="uppercase text-xl">About</a>
              </Link>
            </li>
            <li className="mx-3">
              <Link href="/categories/bespoke">
                <a className="uppercase text-xl">Bespoke</a>
              </Link>
            </li>
            <li className="mx-3">
              <Link href="/categories/men">
                <a className="uppercase text-xl">Men</a>
              </Link>
            </li>
            <li className="mx-3">
              <Link href="/categories/women">
                <a className="uppercase text-xl">Women</a>
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
}
