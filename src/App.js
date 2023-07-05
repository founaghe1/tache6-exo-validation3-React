import './App.css';
import { Navbar } from './Components/navBar/NavBar';
import { Accueil } from './Components/accueil/Accueil';
import { Presentation } from './Components/presentation/Presentation';
import { Portfolio } from './Components/portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Accueil />
      <Presentation />
      <Portfolio />
    </div>
  );
}

export default App;
