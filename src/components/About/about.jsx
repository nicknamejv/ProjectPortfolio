import '../About/about.css';
import image2 from '../../assets/IMG_8755.JPG';

const About = () => {
    return (
        <section className="p-5" id="about">
            <div class="container-fluid px-5 px-lg-5" id="about-div">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-lg-8 text-center">
                        <h2 class="mt-0" id="section-title">
                            About Me!
                        </h2>
                    </div>
                    <hr class="divider divider-light" />
                    <div className="row g-0 m-2 py-5" id="about-background">
                        <div className="col-md-5 d-flex justify-content-center" id="about-section">
                            <img src={ image2 } alt="about-image" class="img-fluid img-thumbnail" id="about-image" />
                        </div>
                        <div className="col-md-7">
                            <p class="mb-4" id="about-description">
                                Hello, My name is Jon! I’m a Full Stack Developer and recent graduate from General Assembly with a background in the retail sector. Through this experience, I have created a strong foundation in communication, strategic thinking, and problem solving. I am highly devoted and passionate about CSS. I specialize in NEM stack (Node.js, Express.js, MongoDB) to create web applications with use of RESTFUL routing and full CRUD.
                            </p>
                            <p class="mb-4" id="about-description">
                                When I'm not coding you'll find me somewhere around the world. I love traveling and visiting national parks and so far I have visited all the major parks in the western United States. I also have a long list of hobbies that include photography, videography, and the occasional video game sessions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;