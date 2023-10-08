import Home from "./pages/home"
import {/*BrowserRouter,*/ Route, Routes} from 'react-router-dom'
// import { HashRouter } from "react-router-dom";
import PrehistoricOfIndonesia from "./pages/prehistoricOfIndonesia"
import LitografiBatavia from "./pages/litografiBatavia";
import BorobudurInNumbers from "./pages/borobudurInNumbers";
import LitografiBataviaProfile from "./pages/litografiBataviaProfile";

function App() {
  return (
    <div>
      {/* <HashRouter> */}
        <Routes>
            <Route  path="/" element={ <Home/> }/>
              <Route  path="prehistoricOfIndonesia" element= {<PrehistoricOfIndonesia />} />
              <Route  path="litografiBatavia" element= {<LitografiBatavia />}/>
              <Route  path= "litografiBatavia/profile/:id" element= {<LitografiBataviaProfile />}/>
              <Route  path="borobudurInNumbers" element= {<BorobudurInNumbers />} />
            <Route/>
            
        </Routes>
      {/* </HashRouter> */}
    </div>
  );
}

export default App;
