import React from 'react'

function Crousel() {
  return (
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <video class="d-block w-100" autoPlay loop muted plays-Inline style={{ width: "100%" }} >
                  

                  <source src="assets/img/backgroun.mp4" type="video/mp4" ></source>
                  
                 

                </video>
      <div class="carousel-caption d-none d-md-block">
        <h5>Welcome to 4Tuners</h5>
        <p class="animated fadeInUp" id="homepage" style={{ color: "white" }}><h3><b style={{ fontSize: "large" }} id='send'>Where</b></h3><h3><b style={{ fontStyle: "italic", fontSize: "larger", fontFamily: "revert" }} id='send' >Technology meets</b></h3><h2><b id='send'>your Aspirations</b></h2></p>
      </div>
    </div>
    <div class="carousel-item">
    <img style={{width:"100%",height:"610px"}} src="assets/img/slide/light.jpg" class="img-fluid" alt="" />
      {/* <img src="assets/img/slide/whatsApp.jpeg" class="d-block w-100" alt="..."/> */}
      <div class="carousel-caption d-none d-md-block">
        <h5>Welcome to 4Tuners</h5>
        <p class="animated fadeInUp" id="homepage" style={{ color: "white" }}><h3><b style={{ fontSize: "large" }} id='send'>Join us</b></h3><h3><b style={{ fontStyle: "italic", fontSize: "larger", fontFamily: "revert" }} id='send' >with your innovative concept!</b></h3><h2><b id='send'>Register your idea today!</b></h2></p>
      </div>
    </div>
    <div class="carousel-item">
    <img style={{width:"100%",height:"610px"}} src="assets/img/slide/light.jpg" class="img-fluid" alt="" />
      {/* <img src="assets/img/slide/light.jpg" class="d-block w-100" alt="..."/> */}
      <div class="carousel-caption d-none d-md-block">
        <h5>Welcome to 4Tuners</h5>
        <p>Where
Technology meets
your Aspirations</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Crousel