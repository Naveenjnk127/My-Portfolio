import "./Projects.css";
import image from "../src/assets/counter-app.png";
import image2 from "../src/assets/todo-ss.png";

export default function Projects() {
  const projects = [
    {
        id:1,
        image:image,
        title:"Counter App - react",
        text:"The basic counter app created using React",
        liveLink:"https://naveenjnk-counter-app.netlify.app/",
        githubLink:"https://github.com/Naveenjnk127/Counter-App"
    },
    {
        id:2,
        image:image2,
        title:"To Do list App - React",
        text:"The basic CRUD operations are done",
        liveLink:"https://naveenjnk-todolist-react.netlify.app/",
        githubLink:"https://github.com/Naveenjnk127/To-Do-List---React"

    }
  ];
  return (
    <div className="project-box" id="projects">
      <h1>Projects</h1>
      <div className="projects">
      {projects.map((index) => {
        return (
            
          <div key={index}className="projectContainer">
            <img src={index.image} className="img-ss"></img>
            <h2>{index.title}</h2>
            <p>{index.text}</p>
            <div className="btnContainer">
              <a
                href={index.liveLink}
                target="_blank"
                rel="noreferrer"
              >
                <button className="livePreview">Live Preview</button>
              </a>
              <a
                href={index.githubLink}
                target="_blank"
                rel="noreferrer"
              >
                <button className="githubLink">Visit Github</button>
              </a>
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
}
