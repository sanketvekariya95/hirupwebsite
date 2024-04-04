import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import './assets/css/Stayle.css'
import About from './component/About';
import Company from './component/Company';
import Name from './component/Name';
import Jobs from './component/Jobs';
import Datacard from './component/Datacard';
import Opening from './component/Opening';
import Work from './component/Work';
import Datawork from './component/Datawork';
import Feture from './component/Feture';
import Testmonial from './component/Testmonial';
import Blog from './component/Blog';
import Datablog from './component/Datablog';
import Explore from './component/Explore';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
     <>
     <Header/>

     <About/>

     <Company/>

     <Name/>

     <Opening/>

     <Datacard/>

     <Datawork/>

     <Feture/>

     <Testmonial/>

     {/* <Blog/> */}
     <Datablog/>

     <Explore/>

     <Footer/>

     </>
    </div>
  );
}

export default App;
