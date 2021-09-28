import './App.css';
import Routes from './config/routes';
import Background from './components/Background/background';
import NavBar from './components/Nav/navbar';

function App() {
  return (
    <div className="app">
    <Background />
    <NavBar />
    <Routes />
    </div>
  )
};

export default App;
