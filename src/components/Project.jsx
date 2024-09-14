// add link to repo and demo?

function Project({ project, className }) {
  return (
    <li className={className}>
      <h3 className="project-display">{project.name}</h3>
      <p>{project.description}</p>
    </li>
  );
}

export default Project;
