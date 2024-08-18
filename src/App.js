import logo from './logo.svg';
import './App.css';
import NAvigation from './Customer/components/Navigation/Navigation';
import HomePage from './Customer/pages/HomePage/HomePage';
import Footer from './Customer/components/Footer/Footer';



function App() {
  return (
    <div className="">
      <NAvigation/>
    <div>
      <HomePage/>
      <Footer/>
    </div>
    </div>
  );
}

export default App;
