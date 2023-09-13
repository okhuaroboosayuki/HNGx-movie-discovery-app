import "./footer.scss";

export const Footer = () => {
  return (
    <footer>
      <div className="social_links">
        <ul>
          <li>
            <a href="#">
              <img src="/src/images/facebook.svg" alt="facebook" loading="lazy"/>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/src/images/instagram.svg" alt="instagram" loading="lazy"/>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/src/images/twitter.svg" alt="twitter" loading="lazy"/>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/src/images/youtube.svg" alt="youtube" loading="lazy"/>
            </a>
          </li>
        </ul>
      </div>
      <div className="other_links">
        <ul>
          <li>
            <a href="#">Conditions of Use</a>
          </li>
          <li>
            <a href="#">Privacy & Policy</a>
          </li>
          <li>
            <a href="#">Press Room</a>
          </li>
        </ul>
      </div>
      <div className="copyright">© {new Date().getFullYear()} MovieBox by Adriana Eka Prayudha </div>
    </footer>
  );
};
