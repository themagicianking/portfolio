// add link to repo and demo?

function Project({ project }) {
  return (
    <li>
      <h3 className="project-display">{project.name}</h3>
      <p>{project.description}</p>
    </li>
  );
}

export default Project;
