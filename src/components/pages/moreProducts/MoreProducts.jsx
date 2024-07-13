import React from "react";
import "./moreProducts.css";
import MoreProjectsInfo from "./MoreProjectsInfo";
import Kasper from "../../../images/Kasper.png";
import Hospital from "../../../images/HospitalSystem.PNG";
import Quraan from "../../../images/Quraan.png";
import QuizApp from "../../../images/QuizApp.png";
import Game from "../../../images/X-O Game.png";
import Commerce from "../../../images/e-commerce.PNG";
import Coffee from "../../../images/Coffee.PNG";
import Skills from "../../../images/skillsWebsite.PNG";
import ImageEditor from "../../../images/imageEditor.png";
const MoreProducts = () => {
  return (
    <div className="more">
      <div className="info">
        <h2>More Projects</h2>
        <p>Check out my latst projects</p>
      </div>

      <div className="container text-center">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <MoreProjectsInfo
              image={Commerce}
              heading="E-Commerce"
              link="https://moamenhussein.github.io/E-Commerce/"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <MoreProjectsInfo
              image={Kasper}
              heading="Kasper ..."
              link="https://moamenhussein.github.io/HTML_And_CSS_Template_Two/"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <MoreProjectsInfo
              image={Hospital}
              heading="Hospital System"
              link="https://moamenhussein.github.io/Hospital/"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <MoreProjectsInfo
              image={Quraan}
              heading="Quraan-Kareem"
              link="https://moamenhussein.github.io/Quraan-Kareem/"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <MoreProjectsInfo
              image={QuizApp}
              heading="QuizApp"
              link="https://moamenhussein.github.io/Quiz_App_With_HTML_CSS_JS/"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <MoreProjectsInfo
              image={Game}
              heading="X-O-Game"
              link="https://moamenhussein.github.io/X_O_Game_With_HTML_CSS_JS/"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <MoreProjectsInfo
              image={Coffee}
              heading="Coffee"
              link="https://moamenhussein.github.io/Coffee/"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <MoreProjectsInfo
              image={Skills}
              heading="Skills"
              link="https://moamenhussein.github.io/New-Website/"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <MoreProjectsInfo
              image={ImageEditor}
              heading="Image-Editor"
              link="https://moamenhussein.github.io/Make_A_Image_Editor_Using_HTML_CSS_JS/"
            />
          </div>
        </div>
      </div>
      <p className="moreProjectInGithub">
        If you want to explore more exciting projects, you can click on this
        link to access my GitHub. <span><a href="https://github.com/moamenhussein">GitHub</a></span>
      </p>
    </div>
  );
};

export default MoreProducts;
