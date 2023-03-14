import featured from "../../featured.json"

function Latest() {



  return (
    <div>
        <section>
        <div className="top">
        <h2>Latest</h2>
        <h4>More</h4>
        </div>
        <div class="container-fluid">

        {
          featured.map((e,index)=>{
            return (
        <div class="card">
  <img className="latest-image" src={e.image} class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{e.title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Read Now</a> <h6 className="card-title">Rs {e.cost}</h6>
  </div>
</div>
            )
          })
        }
        </div>


        </section>
    </div>
  )
}

export default Latest