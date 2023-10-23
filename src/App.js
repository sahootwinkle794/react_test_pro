
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar logo="News@Hand" aboutText="ABOUT"/>
    {/* <Navbar/> */}
    <div className="container my-5">
    <TextForm heading="Enter the text To analyze below"/>
    </div>
    
    </>
    
  );
}

export default App;
