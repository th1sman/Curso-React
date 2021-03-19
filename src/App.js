import React from 'react';
import './App.css';
import Home from './pages/Home'
import Detail from './pages/Detail'
import SearchResults from './pages/SearchResults'
import Pepito from './context/StaticContext'
import {GifsContextProvider} from './context/GifsContext'


import { Link , Route } from 'wouter'

function App() {
  return (
    <Pepito.Provider value={{name: 'midudev',
    suscribeteAlCanal: true}}>
    <div className="App">
      <section className="App-content">
       <Link to="/">
        <img src='/logo.png' alt="Giffy Logo" className="App-logo"/>
       </Link>
       <GifsContextProvider>
       <Route 
        component={Home}
        path="/" />
        <Route 
          component={SearchResults}
          path="/search/:keyword" />
        <Route 
          component={Detail}
          path="/gif/:id" />   
        </GifsContextProvider>
      </section>
    </div>
    </Pepito.Provider>
  );
}

export default App;
