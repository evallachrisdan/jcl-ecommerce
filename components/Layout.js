import Meta from "./meta";
import Navbar from "./Navbar";
import SiteFooter from "./SiteFooter";

export default function Layout({ children }) {
  return (
    <div>
      <Meta />
      <Navbar />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
