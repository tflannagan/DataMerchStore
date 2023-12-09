import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h5>Shop</h5>
          <ul>
            <li>
              <a href="/products/men">Men</a>
            </li>
            <li>
              <a href="/products/women">Women</a>
            </li>
            <li>
              <a href="/products/kids">Kids</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h5>Help</h5>
          <ul>
            <li>
              <a href="/support">Customer Support</a>
            </li>
            <li>
              <a href="/faq">FAQs</a>
            </li>
            <li>
              <a href="/size-guide">Size Guide</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h5>About</h5>
          <ul>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/careers">Careers</a>
            </li>
            <li>
              <a href="/press">Press</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h5>Follow Us</h5>
          <ul>
            <li>
              <a href="https://facebook.com">Facebook</a>
            </li>
            <li>
              <a href="https://instagram.com">Instagram</a>
            </li>
            <li>
              <a href="https://twitter.com">Twitter</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} DataMerch, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
