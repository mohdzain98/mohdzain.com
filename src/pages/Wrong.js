import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const VALID_PAGES = ["about"];

const Wrong = () => {
  const { wrong } = useParams();
  const navigate = useNavigate();
  const [pageExist, setPageExist] = useState(true);
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    if (!VALID_PAGES.includes(wrong)) {
      setPageExist(false);

      const interval = setInterval(() => {
        setSeconds((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            navigate("/");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [wrong, navigate]);

  return (
    <div className="container p-4">
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="d-flex justify-content-center align-items-center">
        <div className="shadow rounded p-4 text-center">
          {!pageExist ? (
            <div className="d-flex justify-content-center align-items-center flex-column mt-5">
              <img
                src={require("../Assets/notfound.webp")}
                alt="Page not found"
                style={{ maxHeight: "300px" }}
                className="img-fluid"
              />
              <h4>The page you are looking for was not found</h4>
              <p>Page does not exist</p>
              <Link to="/">Go To Home</Link>
              <p>
                Redirecting to home in{" "}
                <span className="fs-4 text-primary">{seconds}</span> sec...
              </p>
            </div>
          ) : (
            <p>Valid page: {wrong}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Wrong;
