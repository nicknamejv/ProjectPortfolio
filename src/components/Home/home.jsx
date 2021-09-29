import './home.css';
import image from '../../assets/Online games addiction.gif';


const Home = () => {
    return (
        <div className="container-fluid p-5 d-flex justify-content-center" id="home">
            <div className="row g-5">
                <div className="col-md-4">
                    <img src={image} className="img-fluid" alt="home" id="home-img"></img>
                </div>
                <div className="col-md-8 d-flex justify-content-center align-items-center flex-column flex-wrap">
                    <p className="display-5" id="home-text">Hello World!</p>
                    <p className="display-5" id="home-text">Welcome To My Portfolio!</p>
                    <p className="display-5" id="home-text">My name is Jon Ver Cabral Dela Cruz.</p>
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