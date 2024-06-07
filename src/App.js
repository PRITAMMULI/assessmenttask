import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Addnewuser from './component/userSection/Addnewuser';
import Addnewuserform from './component/userSection/Addnewuserform';
import ProjectState from './component/context/Projectstate';
import Updateuser from './component/userSection/Updateuser';


function App() {
  return (
<div className="container">
  <div className="container">
    <Router>
      <ProjectState>

      <Routes>
        <Route exact path='/' element={<Addnewuser />} />
        <Route exact path='/updatedarrellssteward' element={<Updateuser />} />
        <Route exact path='/addnewuserForm' element={<Addnewuserform />} />
      </Routes>
      </ProjectState>
    </Router>
  </div>
</div>    
  );
}

export default App;
