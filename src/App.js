import { Provider } from 'react-redux';
import './App.css';
import Home from './components/Home';
import Store from './Store';
import { Route, Routes, BrowserRouter as Browser } from 'react-router-dom'
import Update from './components/Update';

function App() {
  return (
    <div className="App">
      <Browser>
        <Provider store={Store}>
          {/* <Home/> */}
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/:id' element={<Home />} />
          </Routes>
        </Provider>
      </Browser>

    </div>
  );
}

export default App;
