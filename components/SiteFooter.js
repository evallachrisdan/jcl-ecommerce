const SiteFooter = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container px-5 mx-auto">
        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 mx-auto gap-4 py-8">
          <div className="mb-3">
            <h6 className="uppercase">Shop</h6>
            <ul>
              <li>Bags</li>
              <li>Wallets</li>
              <li>Accessories</li>
            </ul>
          </div>
          <div className="mb-3">
            <h6 className="uppercase">Customer Care</h6>
            <ul>
              <li>FAQ</li>
              <li>Product Care</li>
              <li>Terms {"&"} Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="mb-3">
            <h6 className="uppercase">Get In Touch</h6>
            <ul>
              <li>customercare@joez.com</li>
              <li>8888-8888</li>
            </ul>
          </div>
          <div className="mb-3">
            <h6 className="uppercase">Find Us On</h6>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
        <div className="text-center py-8">
          <p>Copyright © {new Date().getFullYear} Joez. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
