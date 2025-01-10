import WalletHomePage from "../Assets/Wallet-homePage.jpg";
import LandingPageLibrary from "../Assets/FrontPage.jpg";
import News from "../Assets/News.jpg";

const Projects = () => {
  return (
    <main>
      <div id="projects">
        <p className="section_text_p1">Browse My Recent</p>
        <h1 className="title">Projects</h1>
        <div className="experience-details-container">
          <div className="project-containers">
            <div className="project-details">
              <div className="imageDiv">
                <img src={News} alt="Project2" className="project-img" />
              </div>
              <div className="project-title">
                <h3 className="experience-sub-title">News</h3>
              </div>
              <div className="btn-container">
                <button
                  className="btn btn-color-1 project-btn"
                  onClick={() =>
                    window.open(
                      "https://www.figma.com/proto/NvPwJlXPRSsbfW3qKCs3ba/Tech-News?type=design&node-id=1-2&t=CANOowfGQkqlCFIs-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2&mode=design",
                      "_blank"
                    )
                  }
                >
                  Live Demo
                </button>
              </div>
            </div>
            <div className="project-details">
              <div className="imageDiv">
                <img
                  src={LandingPageLibrary}
                  alt="Project4"
                  className="project-img"
                />
              </div>
              <div className="project-title">
                <h3 className="experience-sub-title">Toy Library</h3>
              </div>
              <div className="btn-container">
                <button
                  className="btn btn-color-1 project-btn"
                  onClick={() =>
                    window.open(
                      "https://github.com/alek08pule/Toy-Library",
                      "_blank"
                    )
                  }
                >
                  Github
                </button>
              </div>
            </div>
            <div className="project-details">
              <div className="imageDiv">
                <img
                  src={WalletHomePage}
                  alt="Project 3"
                  className="project-img"
                />
              </div>
              <div className="project-title">
                <h3 className="experience-sub-title">My Wallet</h3>
              </div>
              <div className="btn-container">
                <button
                  className="btn btn-color-1 project-btn"
                  onClick={() =>
                    window.open(
                      "https://budgettrackermvc20250110173630.azurewebsites.net/",
                      "_blank"
                    )
                  }
                >
                  Start
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects;
