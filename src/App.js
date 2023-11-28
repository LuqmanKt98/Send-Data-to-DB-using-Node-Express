import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import {Routes,Route} from "react-router-dom"
import AddApplicant from './Components/AddApplicant';
import ViewApplicant from './Components/ViewApplicant';

function App() {
  return (
    <>
    <Navbar/>

    <Routes>

      <Route path='AddApplicants' element={<AddApplicant/>}/>
      <Route path='ViewApplicants' element={<ViewApplicant/>}/>

    </Routes>

    

    </>
  );
}

export default App;
