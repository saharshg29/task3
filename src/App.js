import { Provider } from 'react-redux';
import './App.css';
import Home from './components/Home';
import Store from './Store';


function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <Home />
      </Provider>
    </div>
  );
}

export default App;
