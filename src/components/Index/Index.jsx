import About from '../About/about';
import Contact from '../Contact/contact';
import Projects from '../Projects/projects';
import Stack from '../Stack/stack';
import NavBar from '../Nav/navbar';

const Index = () => {
    return (
        <div>
            <NavBar />
            <About />
            <Projects />
            <Stack />
            <Contact />
        </div>
    );
};

export default Index;