import { Home } from "./pages";

import { CursorAnimation } from "./components";

import "./App.scss";

function App() {
  return (
    <main className="main">
      <CursorAnimation />
      <>
        <Home />
      </>
    </main>
  );
}

export default App;
