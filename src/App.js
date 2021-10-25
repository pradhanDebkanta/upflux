import React from 'react';
import Navbar from './component/navbar/Navbar';
import SearchPannel from './component/searcher/SearchPannel';
import ResultBody from './component/searchResult/ResultBody';
import Footer from './component/footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchPannel/>
      <ResultBody/>
      <Footer/>
    </div>
  );
}

export default App;
