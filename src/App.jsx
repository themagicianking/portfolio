import "./App.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ProjectList from "./components/ProjectList";

function App() {
  return (
    <>
      <p>Hi, I'm</p>
      <h1>Thane</h1>
      <p>full stack software engineer</p>
      <Tabs orientation="vertical">
        <Tab label="Projects">
          <ProjectList />
        </Tab>
        <Tab label="About"></Tab>
        <Tab label="Contact"></Tab>
      </Tabs>
      {/* <nav>
        <div id="projects" className="section" style={{ display: "none" }}>
          <h2>Projects</h2>
          <ProjectList />
        </div>
        <div id="about" className="section" style={{ display: "none" }}>
          <h2>About</h2>
          <p>About section will go here.</p>
        </div>
        <div id="contact" className="section" style={{ display: "none" }}>
          <h2>Contact</h2>
          <p>Contact form will go here.</p>
        </div>
        <button>Home</button>
        <button>Projects</button>
        <button>About</button>
        <button>Contact</button>
      </nav> */}
    </>
  );
}

export default App;
