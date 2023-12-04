import "./borobudurInNumbers.css"
import { useEffect} from "react"
import { useDetect } from "../../hooks/hooks"
import BorobudurFounded from "../../components/BorobudurInNumbers/BorobudurFounded"
import BorobudurReconstruction from "../../components/BorobudurInNumbers/BorobudurReconstruction"
import BorobudurYear from "../../components/BorobudurInNumbers/BorobudurYear"
import HeightMeasurement from "../../components/BorobudurInNumbers/HeightMeasurement"
import Stone from "../../components/BorobudurInNumbers/Stone"
import Arca from "../../components/BorobudurInNumbers/Arca"
import Measurement from "../../components/BorobudurInNumbers/Measurement"
import StupaBorobudur from "../../components/BorobudurInNumbers/StupaBorobudur"
import BorobudurFloraFauna from "../../components/BorobudurInNumbers/BorobudurFloraFauna"
import Navbar from '../../components/Navbar'
import BorobudurCover from '../../assets/brb-BorobudurCover.png'

const BorobudurInNumbers = () => {

    const orientation = useDetect()

useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

return (
<>

<div className="borobudurInNumbersContainer">
<Navbar/>

    <div style={{width: "100%", height: "100vh", position: "relative", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <div className={orientation? "introPortrait" : "introLandscape"} style={{position: "absolute", right: "2.5%", width: "95%", display: "flex"}}>
            <div className={orientation? "introContentPortrait" : "introContentLandscape"} style={{backgroundImage: `url(${BorobudurCover})`, backgroundPosition: "center center", backgroundSize: "100% auto" }}></div>
            <div className={orientation? "introContentPortrait" : "introContentLandscape"} id="introContentPortrait" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <h1 style={{textAlign: "center"}}><span style={{color: "#51827a"}}>Borobudur </span><span style={{color: "#363636"}}>dalam </span><span style={{color: "#51827a"}}>Angka</span></h1>
            </div>
        </div>
    </div>

    <div className="content-borobudur-potrait">
    <div className="borobudur-content-container">
        <div className="numbers">
            <div className="line"></div>
            <div id="numbers">1814</div>
        </div>
        <div className="image">
            <BorobudurFounded/>
        </div>
        <div className="description">
            <p>
            Keberadaan <span className="places">Borobudur </span> terungkap pada tahun <span className="digits">1814 </span> 
            dari laporan penemuan reruntuhan batu di daerah Jawa Tengah. Gubernur Jenderal saat itu, 
            Sir Thomas Stanford Raffles kemudian menindaklanjuti laporan tersebut dengan melakukan pembersihan dan penelitian awal.
            </p>
        </div>
    </div>

    <div className="borobudur-content-container">
        <div className="numbers">
            <div className="line"></div>
            <div id="numbers">1973</div>
        </div>
        <div className="image">
            <BorobudurReconstruction/>
        </div>
        <div className="description">
            <p>
            Tahun <span className="digits">1973</span> dilakukan pemugaran besar-besaran terhadap struktur <span className="places">Borobudur</span>. Proyek pemugaran 
            yang dipimpin oleh arkeolog pertama Indonesia R. Soekmono ini berlangsung selama <span className="digits">10</span> tahun. Hasil dari pemugaran
            tersebut adalah struktur <span className="places">Borobudur</span> yang kita lihat sekarang.
            </p>
        </div>
    </div>

    <div className="borobudur-content-container">
        <div className="numbers">
            <div className="line"></div>
            <div id="numbers">775-832</div>
        </div>
        <div className="image">
            <BorobudurYear/>
        </div>
        <div className="description">
            <p>
            Tidak ada sumber pasti yang menyatakan kapan <span className="places">Borobudur</span> berdiri. 
            Namun, interpretasi para arkeolog menduga bahwa <span className="places">Borobudur</span> dibangun 
            dalam kurun waktu yang lama, sekitar <span className="digits">775</span> M hingga <span className="digits">832</span> M.
            </p>
        </div>
    </div>

    <div className="borobudur-content-container">
        <div className="numbers">
            <div className="line"></div>
            <div id="numbers">4</div>
        </div>
        <div className="image">
            <Stone/>
        </div>
        <div className="description">
            <p>
            Kokohnya bangunan <span className="places">Borobudur </span> 
            tidak terlepas dari adanya <span className="digits">4 </span> teknik kunci pada sambungan batu, 
            yakni teknik ekor burung, takikan, alur-lidah, dan purus-lubang. Keempat teknik ini mengunci susunan
            batu agar tidak mudah bergeser.
            </p>
        </div>
    </div>

    <div className="borobudur-content-container">
        <div className="numbers">
            <div className="line"></div>
            <div id="numbers">35,40</div>
        </div>
        <div className="image">
            <HeightMeasurement/>
        </div>
        <div className="description">
            <p>
                <span className="places"> Borobudur </span> 
                memiliki tinggi <span className="digits">35,40 </span> 
                meter, dihitung dari dasar candi hingga puncak stupa induk.
                Tinggi tersebut tidak termasuk <span className="places"><i>chattra </i></span> 
                pada stupa induk yang dilepas 
                karena keakuratan hasil rekonsturksinya diragukan oleh para arkeolog.
            </p>
        </div>
    </div>
    
    <div className="borobudur-content-container">
        <div className="numbers">
            <div className="line"></div>
            <div id="numbers">504</div>
        </div>
        <div className="image" style={{display: "flex", flexDirection: "row"}}>
            <Arca style={{width: '67.5%'}}/>
            <div className="butterfly-container" style={{width: '32.5%'}}>
                <div className="wrap">
                    <div className="body"></div>
                    <div className="left-wing"></div>
                    <div className="right-wing"></div>
                </div>
            </div>
        </div>
        <div className="description">
            <p>
            Terdapat <span className="digits">504 </span> arca yang tersisa di Borobudur. Sebagian besar arca tersebut 
            merupakakan penokohan dari <span className="digits">Dhyani Buddha, Manusi Buddha, </span> dan 
            <span className="digits"> Boddhisatva.</span>
            </p>
        </div>
    </div>

    <div className="borobudur-content-container">
        <div className="numbers">
             <div className="line"></div>
            <div id="numbers">14.767</div>
        </div>
        <div className="image">
            <Measurement/>
        </div>
        <div className="description">
            <p>
            <span className="places">Borobudur</span> memiliki luas  <span className="digits">14.767 m²</span>, terdiri atas 
            panjang <span className="digits">121,66 </span> meter dan lebar <span className="digits">121,38 </span> meter. Angka ini menjadikan 
            <span className="places"> Borobudur </span> sebagai kesatuan struktur candi buddha terbesar di dunia.
            </p>
        </div>
    </div>

    <div className="borobudur-content-container">
        <div className="numbers">
            <div className="line"></div>
            <div id="numbers">73</div>
        </div>
        <div className="image">
            <StupaBorobudur/>
        </div>
        <div className="description">
            <p>
            Terdapat total <span className="digits">73 </span> stupa di Borobudur. Jumlah tersebut terbagi atas <span className="digits">1 </span> stupa induk,
            <span className="digits">32 </span> stupa pada teras melingkar I, <span className="digits">24 </span> stupa pada teras melingkar II, dan 
            <span className="digits"> 16</span> stupa pada teras melingkar III.
            </p>
        </div>
    </div>

    <div className="borobudur-content-container">
        <div className="numbers">
            <div className="line"></div>
            <div id="numbers">52 & 63</div>
        </div>
        <div className="image">
            <BorobudurFloraFauna/>
        </div>
        <div className="description">
            <p>
            Relief <span className="places">Borobudur </span> menyimpan misteri yang besar, salah satunya adalah keragaman flora dan fauna yang 
            terukir. Sejauh ini, penelitian pada relief <span className="places">Borobudur </span> telah berhasil mengidentifikasi <span className="digits">52 </span>jenis fauna 
            dan <span className="digits">63 </span>jenis flora yang terukir di panil-panil relief.
            </p>
        </div>
    </div>

    </div>

</div>           
<div/>

</>
    )
}

export default BorobudurInNumbers