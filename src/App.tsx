import { useState, useEffect } from "react";
import { Home } from "./pages";
import { CursorAnimation, Loader } from "./components";
import "./App.scss";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 640);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    const handleResize = () => {
      setIsDesktop(window.innerWidth > 640);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main className="main">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {isDesktop && <CursorAnimation />}
          <Home />
        </>
      )}
    </main>
  );
}

export default App;
