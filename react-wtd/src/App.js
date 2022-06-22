import './App.css';
import Navbar from './utils/Navbar.js';
import Banner from './utils/Banner.js'
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
