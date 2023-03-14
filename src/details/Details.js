import TabPanel from "./Tabs"
import TopSec from "./TopSec"
function Details(props) {
  console.log(props.title);
  return (
    <div>
       <TopSec/>
       {/* <h1>{props.title}</h1> */}
       <div className="tabs-parent">
       <TabPanel/>
       </div>
    </div>
  )
}

export default Details