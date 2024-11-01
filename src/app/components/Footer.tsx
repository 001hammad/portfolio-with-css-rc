import React from 'react'
import Link from 'next/link';
const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="quick-div">
          <i className="bx bxs-chevrons-up"></i>
          <h2>Quick Links</h2>
          <p><b>Tel:</b> +92 3172774237</p>
          <p>
            <b>Email:</b>
            <a href="mailto:iamhammad224@gmail.com" target="_blank"
              >iamhammad224@gmail.com</a>
          </p>
          <p>
            <b>LinkedIn:</b><Link href="https://www.linkedin.com/in/hammad-hafeez-554789329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"></Link>
            Click Me To Go
          </p>
        </div>

        <div className="owner-div">
          <h2>Owner Info</h2>
          <p><b>Owner:</b> Hammad Hafeez</p>
          <p><b>Province:</b> Sindh</p>
          <p><b>Passion:</b> Programming</p>
        </div>

        <div className="web-about">
          <h2>Web About</h2>
          <p><b>Html-Used:</b> 40%</p>
          <p><b>Tailwind-Used:</b> 30%</p>
          <p><b>Next.js-Used</b> 30%</p>
        </div>

        <div className="footer-subs-div">
          <label htmlFor="subscribe" className="subscribe-text">Subscribe</label>
          <input
            type="text"
            placeholder="Here your message box"
            className="input-box"
          />
        </div>
      </div>

      <div className="end-point">
        <p>&copy; 2024 All Right Reserved. Hammad Portfolio</p>
      </div>
    </footer>

  )
}

export default Footer;
