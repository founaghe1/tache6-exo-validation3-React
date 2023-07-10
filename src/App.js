import './App.css';
import { Navbar } from './Components/navBar/NavBar';
import { Accueil } from './Components/accueil/Accueil';
import { Presentation } from './Components/presentation/Presentation';
import { Portfolio } from './Components/portfolio/Portfolio';
import { Compentences } from './Components/competences/Competences';
import { Experience } from './Components/experences/Experiences';
import { Contact } from './Components/contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Accueil />
      <Presentation />
      <Portfolio />
      <Compentences />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
