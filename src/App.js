import React, {lazy, Suspense} from "react";
import Home from "./pages/home/home.jsx"
import {Route, Routes} from 'react-router-dom'
import LoadingBar from "./components/loading/LoadingBar.jsx";

const PrehistoricOfIndonesia = lazy(() => import ("./pages/prehistoricOfIndonesia/prehistoricOfIndonesia.jsx"))
const BorobudurInNumbers = lazy(() => import ("./pages/borobudurInNumbers/borobudurInNumbers.jsx"))
const LitografiBatavia = lazy(() => import ("./pages/litografiBatavia/litografiBatavia.jsx"))
const LitografiBataviaProfile = lazy(() => import ("./pages/litografiBatavia/litografiBataviaProfile.jsx"))
const TraditionalBoatsOfIndonesia = lazy(() => import ("./pages/traditionalBoatsOfIndonesia/traditionalBoatsOfIndonesia.jsx"))
const MuseumListPage = lazy(() => import ("./pages/museumReview/museumListPage.jsx"))
const ReviewMuseumPage = lazy(() => import ("./pages/museumReview/reviewMuseumPage.jsx"))
const ErrorPage = lazy(() => import ("./pages/errorPage.jsx"))

function App() {

  return (
    <div>
      <Suspense fallback={<LoadingBar size={25} height="100vh"/>}>
        <Routes>
            <Route  path="/" element={ <Home/> }/>
              <Route path="prasejarah-indonesia" element= {<PrehistoricOfIndonesia />} />
              <Route path="litografi-batavia" element= {<LitografiBatavia />}/>
              <Route path= "litografi-batavia/profile/:id" element= {<LitografiBataviaProfile />}/>
              <Route path="borobudur-dalam-angka" element= {<BorobudurInNumbers />} />
              <Route path="perahu-nusantara" element= {<TraditionalBoatsOfIndonesia />} />
              <Route path="museum-list" element= {<MuseumListPage />} />
              <Route path="museum-list/review-museum/:id" element= {<ReviewMuseumPage />} />
              <Route path="error" element={<ErrorPage />}/>
            <Route/>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
