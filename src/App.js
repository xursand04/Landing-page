import Navbar from "./components/navbar";
import About from "./components/about";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Navbar/>
    <About/> 
      </BrowserRouter>
    </div>
  );
}

export default App;
