import image1 from '../../assets/ProjectAssets/ProjectTomagatchi.png';
import image2 from '../../assets/ProjectAssets/ProjectWeebsRUs.png';
import image3 from '../../assets/ProjectAssets/ProjectWayfarer.png';
import image4 from '../../assets/ProjectAssets/ProjectJourneyJapan.png';
import '../Projects/projects.css';

const Projects = () => {
    return (
        <section className="p-3" id="projects">
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
                                <img src={ image1 } class="card-img-top" alt="project"></img>
                                <hr class="divider divider-dark" />
                                <div class="card-body">
                                    <p class="card-text">
                                        To create a user interactive game that replicates the well known hand-held device called "Tamagotchi". Included in this are the same conditions as any Tamagotchi which is to keep them alive by playing, feeding, or having them sleep.
                                    </p>
                                    <p>
                                        JavaScript, CSS, HTML, & NES.css
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="m-2 p-3">
                            <div className="card" id="project-card">
                                <img src={ image2 } class="card-img-top" alt="project"></img>
                                <hr class="divider divider-dark" />
                                <div class="card-body">
                                    <p class="card-text">
                                        Weebs R Us is pair programmed project in which we recreated a site using NEM stack and the goal is improving on the overall user experience and reverse engineering three key features from that site.
                                    </p>
                                    <p>
                                        Express, Node.js, Mongoose, & Bulma.css
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="m-2 p-3">
                            <div className="card" id="project-card">
                                <img src={ image3 } 
                                class="card-img-top" alt="project"></img>
                                <hr class="divider divider-dark" />
                                <div class="card-body">
                                    <p class="card-text">
                                        Project Wayfarer is a group project that is broken up into client approved sprints. Wayfarer is a web application where people can share tips about their travel locations around the world. It builds a community for people seeking to travel or craving to learn about the art and architectures around the world. Users can create posts to share their travel tips and highlights.
                                    </p>
                                    <p>
                                        Django, Python, PostgreSQL, & Bootstrap
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="m-2 p-3">
                            <div className="card" id="project-card">
                                <img src={ image4 } class="card-img-top" alt="project"></img>
                                <hr class="divider divider-dark" />
                                <div class="card-body">
                                    <p class="card-text">
                                    Journey Japan is a web application that will captivate those who are traveling, planning, or thinking of going to Japan. Japan is easily one of the world's most visited country and there seems to be a stigma around the cost of actually going to Japan. The goal for Journey Japan is cultivate real user reviews on the top attractions and places to eat for each of the top cities in Japan. Think of it as a mixture of Tripadvisor and Yelp where users will be able to create an account and post their real reviews.
                                    </p>
                                    <p>
                                        Express, Bcryptjs, Mongoose, SASS, Bootstrap.css, jQuery, Particle.js, & Google Maps API
                                    </p>
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