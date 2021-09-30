import image1 from '../../assets/ProjectAssets/tomagatchi.png';
import image2 from '../../assets/ProjectAssets/weebsrus.png';
import image3 from '../../assets/ProjectAssets/wayfarer.png';
import image4 from '../../assets/ProjectAssets/journeyjapan.png';
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
                        <div className="m-2 p-3">
                            <div className="card" id="project-card">
                                <img src={image4} class="card-img-top" alt="project"></img>
                                <hr class="divider divider-dark" />
                                <div class="card-body">
                                    <h4>JOURNEY JAPAN</h4>
                                    <p class="card-text p-4">
                                        Project Journey Japan is a web application that will captivate those who are traveling, planning, or thinking of going to Japan.The goal for Journey Japan is cultivate real user reviews on the top attractions and places to eat for each of the top cities in Japan.
                                    </p>
                                    <p id="project-tech" className="p-4">
                                        Express, Bcryptjs, Mongoose, SASS, Bootstrap.css, jQuery, Particle.js, & Google Maps API
                                    </p>
                                    <div id="project-links">
                                        <a href="https://journeyjapan.herokuapp.com/journeyjapan" target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-laptop" viewBox="0 0 16 16">
                                                <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
                                            </svg>
                                            <span className="px-2">
                                                LIVE SITE
                                            </span>                                        
                                        </a>
                                        <a href="https://github.com/nicknamejv/ProjectJourneyJapan" target="_blank">
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
                        <div className="m-2 p-3">
                            <div className="card" id="project-card">
                                <img src={image3}
                                    class="card-img-top" alt="project"></img>
                                <hr class="divider divider-dark" />
                                <div class="card-body">
                                    <h4>WAYFARER</h4>
                                    <p class="card-text p-4">
                                        Project Wayfarer is a group project that is broken up into client approved sprints. Wayfarer is a web application where users can create posts to share their travel tips and highlights. It builds a community for people seeking to travel or craving to learn about the art and architectures around the world.
                                    </p>
                                    <p id="project-tech" className="p-4">
                                        Django, Python, PostgreSQL, & Bootstrap
                                    </p>
                                    <div id="project-links">
                                        <a href="https://wayfarer-art-app.herokuapp.com/" target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-laptop" viewBox="0 0 16 16">
                                                <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
                                            </svg>
                                            <span className="px-2">
                                                LIVE SITE
                                            </span>                                        
                                        </a>
                                        <a href="https://github.com/selaguardia/ProjectWayfarer" target="_blank">
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
                        <div className="m-2 p-3">
                            <div className="card" id="project-card">
                                <img src={image2} class="card-img-top" alt="project"></img>
                                <hr class="divider divider-dark" />
                                <div class="card-body">
                                    <h4>WEEBS R US</h4>
                                    <p class="card-text p-4">
                                        Project Weebs R Us is pair programmed project in which we recreated a site using NEM stack and the goal is improving on the overall user experience and reverse engineering three key features from that site. It allows users to create comments and showcase a recommend list onto the home page.
                                    </p>
                                    <p id="project-tech" className="p-4">
                                        Express, Node.js, Mongoose, & Bulma.css
                                    </p>
                                    <div id="project-links">
                                        <a href="https://weebsrus.herokuapp.com/" target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-laptop" viewBox="0 0 16 16">
                                                <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
                                            </svg>
                                            <span className="px-2">
                                                LIVE SITE
                                            </span>
                                        </a>
                                        <a href="https://github.com/nicknamejv/ProjectWeebsRUs" target="_blank">
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
                        <div className="m-2 p-3">
                            <div className="card" id="project-card">
                                <img src={image1} class="card-img-top" alt="project"></img>
                                <hr class="divider divider-dark" />
                                <div class="card-body">
                                    <h4>TOMAGOTCHI</h4>
                                    <p class="card-text p-4">
                                        Project Tamagotchi's is to create a user interactive game that replicates the well known hand-held device called "Tamagotchi". Included in this are the same conditions as any Tamagotchi which is to keep them alive by playing, feeding, or having them sleep. Based on the age interval your pet will evolve to various forms.
                                    </p>
                                    <p id="project-tech">
                                        JavaScript, CSS, HTML, & NES.css
                                    </p>
                                    <div id="project-links" className="p-4">
                                        <a href="https://nicknamejv.github.io/Project-Zero-Tomagotchi/" target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-laptop" viewBox="0 0 16 16">
                                                <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
                                            </svg>
                                            <span className="px-2">
                                                LIVE SITE
                                            </span>
                                        </a>
                                        <a href="https://github.com/nicknamejv/Project-Zero-Tomagotchi" target="_blank">
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
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;