import { Header } from './components/Header';
import { Footer } from './components/Footer';
import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom"
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import { Category } from './pages/Category';
import { Recipe } from './pages/Recipe';


function NoMatch(){
  let location = useLocation();

  return(
    <div>
      <h1>Oops!</h1>
      <h3>Sorry, an unexpected error has occured.</h3>
      <h5>Does not exist: {location.pathname}</h5>
    </div>
  );
}


function App() {
  return (
    <>
      <BrowserRouter basename="/react-spa">
        <Header/>
        <main className='container-content'>
          <Routes>
            <Route path='*' element={<NoMatch />} />
            <Route path='/' element={<Home />} />
            <Route path='contact/' element={<Contact />} />
            <Route path='about/' element={<About />} />
            <Route path='category/:name' element={<Category />} />
            <Route path='meal/:id' element={<Recipe />} />
          </Routes>
        </main>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
