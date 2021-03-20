import React from 'react';
import './App.css';
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'
import { Link ,Route } from 'wouter'
import StaticContext from './context/StaticContext'
import { GifsContextProvider } from './context/GifsContext';
function App() {
  return (
    <StaticContext.Provider value={{
      name: 'este-es-provider',
      suscribeteAlCanal: true
    }}>
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
      <Link to="/">

      </Link>
      <GifsContextProvider>
        <Route
          component={Home}
          path="/"
        />

        <Route
          component={SearchResults} 
          path="/search/:keyword" 
        />
      
        <Route 
          component={Detail}
          path="/gif/:id"
        />
        </GifsContextProvider>
      </section>
    </div>
    </StaticContext.Provider>
  );
}

export default App;
