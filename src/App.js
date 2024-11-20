import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import  Home  from './views/Home'
import { Photo } from "./views/Photo";

function App() {

  return (
    <Router>
    <Routes>
          
          <Route exact path="/react-unsplash-api/photo/:id" element={<Photo />} />
          <Route exact path="/react-unsplash-api/" element={<Home />} />
        </Routes>
       </Router>
  );
}

export default App;
