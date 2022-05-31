import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import About from './components/About';
import Slide from './components/Works';
// import Skills from './components/Skills';
function App() {
  return (
    <div className="App" >
      <Navbar/>
      <Homepage/>
      <About/>
      <Slide/>
      {/* <Skills/> */}
    </div>
  );
}

export default App;
