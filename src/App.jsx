import { lazy, Suspense } from "react";

import {
  About,
  Contact,
  Education,
  Experience,
  Footer,
  Hero,
  Navbar,
  Tech,
  Works,
} from "./components";

const StarsCanvas = lazy(() =>
  import("./components/canvas").then((m) => ({ default: m.StarsCanvas }))
);

const App = () => {
  return (
    <div className="relative z-0 bg-primary overflow-x-clip">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Tech />
      <Works />
      <Education />
      <div className="relative z-0">
        <Contact />
        <Suspense fallback={null}>
          <StarsCanvas />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
};

export default App;
