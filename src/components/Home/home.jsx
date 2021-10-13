import './home.css';
import image from '../../assets/Online games addiction.gif';


const Home = () => {
    return (
        <div className="container-fluid p-5 d-flex justify-content-center flex-wrap" id="home">
            <div className="row g-5">
                <div className="col-md-4" id="home-img">
                    <img src={image} className="img-fluid" alt="home"></img>
                </div>
                <div className="col-md-8 d-flex justify-content-center align-items-center flex-column text-center">
                    <p className="display-5 home-text" >
                        Hello World!
                    </p>
                    <p className="display-5 home-text">
                        My name is Jon Ver Cabral Dela Cruz
                    </p>
                    <p className="display-5 home-text">
                        and I am a Full Stack Developer.
                    </p>
                    <br />
                    <div className="d-flex justify-content-center">
                        <a href="/about" className="btn btn-dark" role="button" id="home-button">
                            console.log("Enter Portfolio")
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;