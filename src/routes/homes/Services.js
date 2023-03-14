import "./HomeStyle.css"

function Services() {
  return (
    <div>
     <section className="service-grid pb-5 pt-5">
        <div className="container">
            <div className="row">
                <div className="col-xl-12 text-center mb-4">
                    <div className="service-title">
                        <h2>Our Services</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 text-center mb-3">
                    <div className="service-wrap">
                        <div className="service-icon">
                            <i className="fas fa-layer-group"></i>
                        </div>
                        <h4>Web Application</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry...</p>
                        <a href="#">Read More</a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 text-center mb-3">
                    <div className="service-wrap">
                        <div className="service-icon">
                            <i className="far fa-chart-bar"></i>
                        </div>
                        <h4>Highly customizable</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry...</p>
                        <a href="#">Read More</a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 text-center mb-3">
                    <div className="service-wrap">
                        <div className="service-icon">
                            <i className="fas fa-database"></i>
                        </div>
                        <h4>Responsive design</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry...</p>
                        <a href="#">Read More</a>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
    </div>
  )
}

export default Services