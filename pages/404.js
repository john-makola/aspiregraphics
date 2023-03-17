import { useEffect } from "react";
import { useRouter } from "next/router";

const PageNotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 1500);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "400px",
        fontSize: "4rem",
        textAlign: "center",
        padding: "100px",
      }}
    >
      <h1>Page Not Found</h1>
    </div>
  );
};

export default PageNotFound;
