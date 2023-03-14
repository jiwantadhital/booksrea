import NovelsCard from "./allNovels/NovelsCard"
import Search from "./allNovels/Search"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"


function AllNovels() {
  return (
    <div>
          <Navbar/>

        <Search/>
        {/* <NovelsCard/> */}
        <Footer/>
    </div>
  )
}

export default AllNovels