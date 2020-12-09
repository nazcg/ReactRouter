import {BrowserRouter as Router, Route} from 'react-router-dom';
import Formulario from './Components/Formulario';
import Info from './Components/Info';
function App() {
  return (
    <Router>
      <div className ="container">
        <Route path ='/' exact component ={Formulario}></Route>
         <Route exact path ='/Info'  component ={Info}></Route>
      </div>
    </Router>
  );
}

export default App;
