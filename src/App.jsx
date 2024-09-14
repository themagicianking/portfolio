import "./App.css";
import ProjectList from "./components/ProjectList";

function App() {
  return (
    <>
      <p>Hi, I'm</p>
      <h1>Thane</h1>
      <p>full stack software engineer</p>
      <nav>
        <div id="projects">
          <h2>Projects</h2>
          <ProjectList />
        </div>
        <div id="about">
          <h2>About</h2>
          <p>About section will go here.</p>
        </div>
        <div id="contact">
          <h2>Contact</h2>
          <p>Contact form will go here.</p>
        </div>
        <button>Projects</button>
        <button>About</button>
        <button>Contact</button>
      </nav>
    </>
  );
}

export default App;
