import Router from './Router';
import './App.css';
import { Navbar } from './components';

function App() {
  return (
    <div>
      {/* Porque la queria de forma global */}
      <Navbar/>
      <Router/>
    </div>
  );
}

export default App;
