import { BrowserRouter as Router } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Works } from "./components";
import Skills from "./components/Skills";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Works />
      <Contact />
    </Router>
  );
};

export default App;
