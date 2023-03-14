import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Latest from "./homes/Latest"
import Rcommended from "./homes/Rcommended"
import Services from "./homes/Services"

function Home() {
  return (
    <div>

      <Hero 
      cName = "hero"
      image = "https://chisnghiax.com/ciscryp/static/media/hero3.4e6ad1cc9f020111cab5.png"
      title = "New Day New Knowledge"
      text = "Choose Your Favourite Books"
      url = "/"
      btnClass = "show"
      btnText = "Read Now"
      />
      <Services/>

      {/* <Rcommended/> */}
      <Latest/>
      <Navbar/>

      <Footer/>
    </div>
  )
}

export default Home