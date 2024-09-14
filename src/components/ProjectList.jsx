import Project from "./Project";

const PROJECTS = [
  { name: "example name", description: "example description" },
  { name: "example name", description: "example description" },
  { name: "example name", description: "example description" },
];

function ProjectList() {
  return (
    <ul>
      {PROJECTS.map((project) => {
        return <Project project={project} />;
      })}
    </ul>
  );
}
export default ProjectList;
