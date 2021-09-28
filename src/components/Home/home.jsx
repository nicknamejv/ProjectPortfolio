import './home.css';
import homeimage from '../../assets/Setting.png';

const Home = () => {
    return (
        <div className="container-fluid p-1" id="home">
            <div className="row g-0">
                    <div className="col-md-6">
                        <img src={ homeimage } className="img-fluid rounded-start" alt="home" id="home-img"></img>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center flex-column">
                            <p className="display-5" id="home-text">Hello World!</p>
                            <p className="display-5" id="home-text">Welcome To My Portfolio!</p>
                            <p className="display-5" id="home-text">My name is Jon Ver Cabral Dela Cruz.</p>
                    </div>
                </div>
        </div>
    );
};

export default Home;