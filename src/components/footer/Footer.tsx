import { Link } from "react-router-dom";
import "./footer.scss";

export const Footer = () => {
  return (
    <footer>
      <div className="social_links">
        <ul>
          <li>
            <Link to={"https://www.facebook.com/"}>
              <img src="/images/facebook.svg" alt="facebook" loading="lazy"/>
            </Link>
          </li>
          <li>
            <Link to={"https://www.instagram.com/"}>
              <img src="/images/instagram.svg" alt="instagram" loading="lazy"/>
            </Link>
          </li>
          <li>
            <Link to={"https://twitter.com/"}>
              <img src="/images/twitter.svg" alt="twitter" loading="lazy"/>
            </Link>
          </li>
          <li>
            <Link to={"https://www.youtube.com/"}>
              <img src="/images/youtube.svg" alt="youtube" loading="lazy"/>
            </Link>
          </li>
        </ul>
      </div>
      <div className="other_links">
        <ul>
          <li>
            <Link to={"/"}>Conditions of Use</Link>
          </li>
          <li>
            <Link to={"/"}>Privacy & Policy</Link>
          </li>
          <li>
            <Link to={"/"}>Press Room</Link>
          </li>
        </ul>
      </div>
      <div className="copyright">© {new Date().getFullYear()} MovieBox by Adriana Eka Prayudha </div>
    </footer>
  );
};
