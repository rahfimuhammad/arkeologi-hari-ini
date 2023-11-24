import React, {lazy, Suspense} from "react";
import Home from "./pages/home"
import {Route, Routes} from 'react-router-dom'
import LoadingBar from "./components/loading/LoadingBar.jsx";

const PrehistoricOfIndonesia = lazy(() => import ("./pages/prehistoricOfIndonesia"))
const BorobudurInNumbers = lazy(() => import ("./pages/borobudurInNumbers"))
const LitografiBatavia = lazy(() => import ("./pages/litografiBatavia"))
const LitografiBataviaProfile = lazy(() => import ("./pages/litografiBataviaProfile"))
const TraditionalBoatsOfIndonesia = lazy(() => import ("./pages/traditionalBoatsOfIndonesia"))

function App() {
  return (
    <div>
      <Suspense fallback={<LoadingBar/>}>
        <Routes>
            <Route  path="/" element={ <Home/> }/>
              <Route  path="prehistoricOfIndonesia" element= {<PrehistoricOfIndonesia />} />
              <Route  path="litografiBatavia" element= {<LitografiBatavia />}/>
              <Route  path= "litografiBatavia/profile/:id" element= {<LitografiBataviaProfile />}/>
              <Route  path="borobudurInNumbers" element= {<BorobudurInNumbers />} />
              <Route  path="traditionalBoatsOfIndonesia" element= {<TraditionalBoatsOfIndonesia />} />
            <Route/>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
