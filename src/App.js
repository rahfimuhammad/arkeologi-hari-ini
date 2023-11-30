import React, {lazy, Suspense} from "react";
import Home from "./pages/home"
import {Route, Routes} from 'react-router-dom'
import LoadingBar from "./components/loading/LoadingBar.jsx";

const PrehistoricOfIndonesia = lazy(() => import ("./pages/prehistoricOfIndonesia"))
const BorobudurInNumbers = lazy(() => import ("./pages/borobudurInNumbers"))
const LitografiBatavia = lazy(() => import ("./pages/litografiBatavia"))
const LitografiBataviaProfile = lazy(() => import ("./pages/litografiBataviaProfile"))
const TraditionalBoatsOfIndonesia = lazy(() => import ("./pages/traditionalBoatsOfIndonesia"))
const MuseumListPage = lazy(() => import ("./pages/museumListPage.jsx"))
const ReviewMuseumPage = lazy(() => import ("./pages/reviewMuseumPage.jsx"))

function App() {

  return (
    <div>
      <Suspense fallback={<LoadingBar/>}>
        <Routes>
            <Route  path="/" element={ <Home/> }/>
              <Route  path="prasejarah-indonesia" element= {<PrehistoricOfIndonesia />} />
              <Route  path="litografi-batavia" element= {<LitografiBatavia />}/>
              <Route  path= "litografi-batavia/profile/:id" element= {<LitografiBataviaProfile />}/>
              <Route  path="borobudur-dalam-angka" element= {<BorobudurInNumbers />} />
              <Route  path="perahu-nusantara" element= {<TraditionalBoatsOfIndonesia />} />
              <Route  path="museum-list" element= {<MuseumListPage />} />
              <Route path="museum-list/review-museum/:id" element= {<ReviewMuseumPage />} />
            <Route/>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
