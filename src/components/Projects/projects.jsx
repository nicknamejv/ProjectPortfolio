// import image1 from '../../assets/ProjectAssets/tomagatchi.png';
// import image2 from '../../assets/ProjectAssets/weebsrus.png';
// import image3 from '../../assets/ProjectAssets/wayfarer.png';
// import image4 from '../../assets/ProjectAssets/journeyjapan.png';
import { ProjectData } from './data/ProjectData';
import '../Projects/projects.css';

const Projects = () => {
    return (
        <section className="p-5" id="projects">
            <div class="container-fluid px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-lg-8 text-center">
                        <h2 class="mt-0" id="section-title">
                            Projects!
                        </h2>
                    </div>
                    <hr class="divider divider-light" />
                    <div className="d-flex justify-content-evenly flex-wrap">
                        {ProjectData.map((item, index) => {
                            return (
                                <div className="m-2 p-3">
                                    <div key={index} className="card" id="project-card">
                                        <img src={item.src} class="card-img-top" alt="project"></img>
                                        <hr class="divider divider-dark" />
                                        <div class="card-body">
                                            <h4>{item.title}</h4>
                                            <p class="card-text p-4">
                                                {item.text}
                                            </p>
                                            <p id="project-tech" className="p-4">
                                                {item.projectTech}
                                            </p>
                                            <div id="project-links">
                                                <a href={item.liveSite} target="_blank">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-laptop" viewBox="0 0 16 16">
                                                        <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
                                                    </svg>
                                                    <span className="px-2">
                                                        LIVE SITE
                                                    </span>
                                                </a>
                                                <a href={item.githubSite} target="_blank">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                                    </svg>
                                                    <span className="px-2">
                                                        GITHUB
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;