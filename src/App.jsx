import { BrowserRouter as Router } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  // Tech,
  Works,
} from "./components";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      {/* <Tech /> */}
      <Works />
      <Contact />
    </Router>
  );
};

export default App;
