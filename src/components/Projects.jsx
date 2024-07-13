import React from "react";
import ProjectsInfo from "./ProjectsInfo";
import projectOne from "../images/project1.png";
import projectTwo from "../images/project4.png";
import projectThree from "../images/project5.png";
import projectFour from "../images/project27.png";
import projectFive from "../images/project28.png";
import projectSix from "../images/plans.png";
import {Link} from "react-router-dom"
const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="info">
        <h2>My Projects</h2>
        <p>Check out my latest projects</p>
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <ProjectsInfo
              image={projectOne}
              heading={"Typing-Speed -game"}
              date="Mar 18, 2023

"
              link="https://moamenhussein.github.io/Create_Typing_Speed_Test_Game_With_javaScript/"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <ProjectsInfo
              image={projectTwo}
              heading="Cruds-System"
              date="Sep 5, 2023"
              link="https://moamenhussein.github.io/Full_product_management_system_crud_With_HTML_CSS_JS/"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <ProjectsInfo
              image={projectThree}
              heading="Hangman-Game"
              date="Aug 9, 2023"
              link="https://moamenhussein.github.io/Hangman_Game_With_HTML_CSS_JS/"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <ProjectsInfo
              image={projectSix}
              heading="Admin-Dashboard"
              date="Aug 16, 2023"
              link="https://moamenhussein.github.io/HTML_And_CSS_Template_Four/plans.html"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <ProjectsInfo
              image={projectFour}
              heading="Naxos..."
              date="Mar 11, 2023"
              link="https://moamenhussein.github.io/HTML_And_CSS_Template_Number_Six/"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <ProjectsInfo
              image={projectFive}
              heading="My-World"
              date="Mar 11, 2023"
              link="https://moamenhussein.github.io/HTML_And_CSS_Template_Three/"
            />
          </div>
        </div>
      </div>
      <Link to="/moreproducts" className="moreProjects">
        More
      </Link>
    </div>
  );
};

export default Projects;
