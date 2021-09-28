import './navbar.css';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-light" id="navbar">
            <div className="container-fluid d-flex justify-content-center">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <div className="d-flex justify-content-center">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#projects">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#stack">Stack</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;