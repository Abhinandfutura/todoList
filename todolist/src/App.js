
import './App.css';
import {Routes,Route,BrowserRouter} from  'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Sample from './Sample'
import Test from './Test';
function App() {
  return (
    <div className="App">

  <BrowserRouter>
      <Routes>
      <Route path ='/' element={  <Sample/>}/>
      </Routes>
      </BrowserRouter>





    </div>
  );
}

export default App;
