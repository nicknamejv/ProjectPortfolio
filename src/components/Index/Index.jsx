import About from '../About/about';
import Contact from '../Contact/contact';
import Projects from '../Projects/projects';
import TechStack from '../TechStack/TechStack';
import NavBar from '../Nav/navbar';

const Index = () => {
    return (
        <div>
            <NavBar />
            <About />
            <Projects />
            <TechStack />
            <Contact />
        </div>
    );
};

export default Index;