import './App.css';
import About from './Dec02/About';
import Contact from './Dec02/Contact';
import Home from './Dec02/Home';
import Posts from './Dec02/Posts';
import MyNavBar from './Dec02/navBar';
import {Route} from 'react-router-dom';

function App() {
  return (
   
        <div>
          <MyNavBar></MyNavBar>
          
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/posts" component={Posts} />
          <Route path="/contact" component={Contact} />
        </div>
  );
}

export default App;
