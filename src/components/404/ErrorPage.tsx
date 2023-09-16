import { useNavigate } from "react-router-dom";
import "./error-page.scss";

export const ErrorPage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
      navigate(-1);
  };

  return (
    <>
      <div className="error_page_container">
        <div className="row">
          <div className="error_content">
            <h1>404</h1>
            <h2>UH OH! You're lost.</h2>
            <p>
              The page you are looking for does not exist. How you got here is a
              mystery. But you can click the button below to go back to the
              homepage.
            </p>
            <button className="btn" onClick={handleNavigate}>
                Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
