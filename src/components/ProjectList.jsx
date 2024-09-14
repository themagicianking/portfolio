import Project from "./Project";

let project = { name: "example name", description: "example description" };

function ProjectList() {
  return (
    <>
      <Project project={project} />
      <Project project={project} />
      <Project project={project} />
    </>
  );
}
export default ProjectList;
