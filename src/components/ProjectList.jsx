import Project from "./Project";

const PROJECTS = [
  { name: "example name", description: "example description" },
  { name: "example name", description: "example description" },
  { name: "example name", description: "example description" },
];

function createProjectClass(index) {
  return index % 2 === 0 ? "even-project" : "odd-project";
}

function ProjectList() {
  return (
    <ul>
      {PROJECTS.map((project, index) => {
        return (
          <Project
            key={index}
            project={project}
            className={createProjectClass(index)}
          />
        );
      })}
    </ul>
  );
}
export default ProjectList;
