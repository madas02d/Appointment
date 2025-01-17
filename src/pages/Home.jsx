import Banner from "../components/Banner.jsx"
import Header from "../components/Header.jsx"
import SpecialityMenu from "../components/SpecialityMenu.jsx"
import TopDoctors from "../components/TopDoctors.jsx"

function Home() {
  return (
    <div >
       <Header/>
       <SpecialityMenu/>
       <TopDoctors/>
       <Banner/>
    </div>
  )
}

export default Home