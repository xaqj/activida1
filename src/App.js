import React from 'react';
import { Header } from "./components/Header";
//import { Home } from './components/Home';
//import { Menu } from './components/Menu';
import './App.css';
import { BibliotecaRouter } from './router/BibliotecaRouter';
import './styles/styles.css';
import { Footer } from './components/Footer';
import { BookProvider } from './context/BookContext';




//export default App;
function App(){
 

  return(
    <BookProvider>
  <div className="App">
  <Header/>

  <BibliotecaRouter/>
  <Footer/>
  </div>
  </BookProvider>
  );

}
export default App;
