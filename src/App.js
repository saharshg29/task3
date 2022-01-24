import { Provider } from 'react-redux';
import './App.css';
import Home from './components/Home';
import Store from './Store';
import { Route, Routes, BrowserRouter as Browser } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Browser>
        <Provider store={Store}>
          <Home />
        </Provider>
      </Browser>

    </div>
  );
}

export default App;
