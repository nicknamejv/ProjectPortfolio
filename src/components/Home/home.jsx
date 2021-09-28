import './home.css';
import homeimage from '../../assets/Setting.png';

const Home = () => {
    return (
        <div className="container-fluid">
            <div className="card mb-3" id="home-card">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={ homeimage } className="img-fluid rounded-start" alt="home"></img>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;