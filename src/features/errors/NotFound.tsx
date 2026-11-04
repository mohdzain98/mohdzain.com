import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import notFoundImg from "@/assets/notfound.webp";

export default function Wrong() {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    const id = window.setInterval(() => setSeconds((s) => s - 1), 1000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    if (seconds <= 0) navigate("/");
  }, [seconds, navigate]);

  return (
    <div className="container mx-auto p-6 px-4">
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="flex items-center justify-center">
        <div className="rounded-lg border bg-card p-6 text-center ">
          <div className="mt-12 flex flex-col items-center justify-center">
            <img
              src={notFoundImg}
              alt="Page not found"
              style={{ maxHeight: "300px" }}
              className="h-auto max-w-full"
            />
            <h4 className="text-xl font-medium">
              The page you are looking for was not found
            </h4>
            <p>Page does not exist</p>
            <Link to="/">Go To Home</Link>
            <p>
              Redirecting to home in{" "}
              <span className="text-primary text-2xl">
                {Math.max(seconds, 0)}
              </span>{" "}
              sec...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
