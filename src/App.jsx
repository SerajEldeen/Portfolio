import { BrowserRouter as Router } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Works,
  Skills,
} from "./components";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Works />
      {/* <Contact /> */}
    </Router>
  );
};

export default App;
