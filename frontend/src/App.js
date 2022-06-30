import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import Banner from './components/Banner/Banner.js'
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <div className="container">
      <GlobalStyle/>
      <Navbar></Navbar>
      <Banner></Banner>
    </div>
  );
}

export default App;
