import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'; // corrected typo here

function App() {
  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;
