import "./projects.css";
import ProjectCard from "./ProjectCard";
import { ProjectData } from "../../../Data/ProjectData";
import Separator from "../../Common/Separator/Separator";
function Projects() {
  const data = ProjectData;
  return (
    <div className="projects">
      <Separator />
      <label className="section-title">Projects</label>
      <div>
        {data.map((project) => {
          return <ProjectCard project={project} />;
        })}
      </div>
    </div>
  );
}

export default Projects;