import Footerbar from '../Footerbarcomponent/Footerbar';
import Headerbar from '../Headerbarcomponent/Headerbar';
import Scroll from '../Servicescomponent/Scroll';
import './Mainbar.css';


function Mainbar() {
  return (
    <>
      <Headerbar />

      {/* ======= Hero Section ======= */}
      <section id="hero">

        <div class="hero-container">

          <div id="heroCarousel" class="carousel slide carousel-fade" data-bs-ride="true">

            <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>

            <div class="carousel-inner " role="listbox">

              {/* Slide 1 */}
              <div class="carousel-item active" >
              <div class="custom-shape-divider-bottom-1698307405">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
    </svg>
</div>

              {/* <div class="custom-shape-divider-bottom-1698223931">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
</div> */}
                <video autoPlay loop muted plays-Inline style={{ width: "100%" }} >
                  

                  <source src="assets/img/backgroun.mp4" type="video/mp4" ></source>
                  
                 

                </video>

                <div class="carousel-container" style={{marginBottom:"120px"}}>
                  <div class="carousel-content container">
                    <h2 class="animated fadeInDown" id="homepage"><span >Welcome to 4Tuners</span></h2>
                    <br /><br />

                    <p class="animated fadeInUp" id="homepage" style={{ color: "white" }}>
                      <h3>
                        <b style={{ fontSize: "large" }} >Where</b>
                        </h3>
                        <h3>
                          <b style={{ fontStyle: "italic", fontSize: "60px", fontFamily: "Jenthill" ,color:"#49c5b6", fontWeight:"bold 50px"}} id='send' >Technology</b><span style={{fontSize:"25px"}}><b>  meets</b></span> 
                          </h3>
                          <h2>
                            <span  style={{fontSize:"25px",border: "none"}}>your </span><span id='send' style={{fontStyle: "italic",fontSize:"60px",color:"#49c5b6", fontFamily: "Jenthill", fontWeight:"bold 50px"}}>Aspirations</span>
                            </h2>
                            </p>
                    {/* <a href="#about" class="btn-get-started animated fadeInUp scrollto"></a> */}
                  </div>
                </div>
              </div>

              {/* Slide 2 */}
              <div class="carousel-item" ><img style={{width:"100%"}}src="assets/img/slide/whatsApp.jpeg" class="img-fluid" alt="" />
              <div class="custom-shape-divider-bottom-1698307405">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
    </svg>
</div>
                <div class="carousel-container">
                  <div class="carousel-content container">
                    <h2 class="animated fadeInDown" id="homepage"></h2>
                    <br /><br />
                    <p class="animated fadeInUp" id="homepage" style={{ color: "white" }}><h2><b style={{ fontSize: "larger", color:"#49c5b6", marginRight: 100, fontFamily:"Jenthill"}} id='send'>Prosper Hand in Hand, Let's build the future together!</b></h2><h3><b style={{ fontStyle: "italic", fontSize: "larger", fontFamily: "revert" }} id='send' >with your idea</b></h3><h3><b id='send'>Register today!</b></h3></p>
                    {/* <a href="#about" class="btn-get-started animated fadeInUp scrollto"></a> */}
                  </div>
                </div>
              </div>
              {/* Slide 3 */}
              <div class="carousel-item" ><img style={{width:"100%",height:"1050px"}} src="assets/img/slide/light.jpg" class="img-fluid" alt="" />
              <div class="custom-shape-divider-bottom-1698307405">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
    </svg>
</div>
                <div class="carousel-container">
                  <div class="carousel-content container">
                    <h2 class="animated fadeInDown" id="homepage">Welcome to 4Tuners</h2>
                    <br /><br />
                    <p class="animated fadeInUp" id="homepage" style={{ color: "white" }}><h3><b style={{ fontSize: "large" }} id='send'>Join us</b></h3><h3><b style={{ fontStyle: "italic", fontSize: "larger", fontFamily: "revert" }} id='send' >with your innovative concept!</b></h3><h2><b id='send'>Register your idea today!</b></h2></p>
                    {/* <a href="#about" class="btn-get-started animated fadeInUp scrollto" ></a> */}
                  </div>
                </div>
              
              </div>

            </div>

            <a class="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev" style={{ color: "white" }}>
              <span class="carousel-control-prev-icon icofont-rounded-left" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
              <span class="carousel-control-next-icon icofont-rounded-right" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
            

          </div>
        </div>
        
      </section>{/* End Hero */}
    
    


      <div id='mainbarback'>
        <br/><br/>
       

        {/* ======= About Us Section ======= */}
        <section id="about" class="about">
          <div class="container">

            <div class="row no-gutters">
              <div class="col-lg-6 video-box" style={{ backgroundColor: "#001524", height: "480px", borderRadius: "25px", marginTop: "9px", paddingLeft: "27px" }}>
                <video autoPlay loop muted plays-Inline style={{ width: "500px", height: "300px", borderRadius: "50px", marginTop: "85px", marginRight: "25px" }}>

                  <source src="assets/img/video.mp4" type="video/mp4"></source>

                </video>
                {/* <div class="section-title">
          <h2 style={{color:"white"}}>coming soon</h2>
          <p style={{color:"#001524"}}>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.</p>
        </div> */}
                {/* <img src="assets/img/about.jpg" class="img-fluid" alt=""/> */}


                {/* <a href="https://youtu.be/BadB1z-V_qU?si=GNz74k7Gt-1qhATG" class="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a> */}
              </div>

              <div class="col-lg-6 d-flex flex-column justify-content-center about-content">

                <div class="section-title">
                  <h2 style={{ color: "white" }}>About Us</h2>
                  <p style={{ color: "white" }}>Welcome to 4Tuners Technologies, where innovation meets excellence. Founded in November 2022, we are a dynamic and forward-thinking technology company committed to delivering cutting-edge solutions that empower businesses and individuals in the digital age.</p>
                </div>
                <div class="section-title">
                  <h2 style={{ color: "white" }}>Our Mission</h2>
                  <p style={{ color: "white" }}>Our mission is to make technology accessible and transformative. We believe that technology should not be a barrier, but a bridge, enabling businesses to thrive and individuals to realize their digital aspirations. We are committed to providing top-notch, tailor-made solutions that help our clients achieve their goals.</p>
                </div>

                {/* <div class="icon-" data-aos="fade-up" data-aos-delay="100">
          <div class=""><i class=""></i></div>
          <h4 class="title"><a style={{color:"white" ,fontFamily:Credential}}>Our Mission</a></h4>
          <p class="description"style={{color:"white"}}>At 4Tuners Technologies, we specialize in a wide range of technologies, including React Native, React JS, Node JS, Mongo DB, Firebase, Next JS, WordPress, HTML, CSS, and WooCommerce etc. Our expertise is to provide the complete solution for Mobile and Web application. Our team of highly skilled and passionate professionals is dedicated to harnessing the power of these technologies to create stunning, user-friendly, and high-performing web and mobile applications.</p>
        </div> */}

                {/* <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
          <div class="icon"><i class="bx bx-gift"></i></div>
          <h4 class="title"><a style={{color:"white"}}>Nemo Enim</a></h4>
          <p class="description"style={{color:"white"}}>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
        </div> */}

              </div>
            </div>

          </div>
        </section>{/* End About Us Section */}
       
        <br /> <br /> <br />
        
        {/* ======= Services Section ======= */}
        {/* <section id="services" class="services" style={{ backgroundColor: "#445D48" }}>
          <div class="container" style={{textAlign:"center",alignSelf:"center", display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}} >

            <div class="section-title" style={{textAlign:"center",alignSelf:"center", display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}} >
              <h2 style={{ color: "white" }}>Our Expertise</h2>
            </div>
            <p style={{ color: "white" ,fontStyle:"italic",width:"90%",textAlign:"center",alignItems:"center",display:"flex",justifyContent:"center", }}>
              <h5><b> At 4Tuners Technologies, we specialize in a wide range of technologies, including <br/><br/><p style={{color:'#001524', fontSize:"larger"  }}>React Native,<br/> React JS, Next JS<br/> Node JS, Ruby on Rails,<br/> Mongo DB, Firebase, MySQL<br/>WordPress,<br/> HTML, CSS.</p> <br/> Our expertise is to provide the complete solution for Mobile and Web application. Our team of highly skilled and passionate professionals is dedicated to harnessing the power of these technologies to create stunning, user-friendly, and high-performing web and mobile applications.</b></h5></p>

          </div>
        </section> */}
<div style={{display:'flex',justifyContent:'center'}}>

<Scroll/>
</div>








        
        <br />
        {/* ======= Contact Us Section ======= */}
        <section id="contact" class="contact">
          <div class="container">
            <div class="section-title">
              <h2 style={{ color: "#001524" }}><b>Contact Us</b></h2>
            </div>
            <br />
            <div class="row">
              <div class="col-lg-6 d-flex align-items-stretch" data-aos="fade-up">
                <div class="info-box">
                  <i class="bx bx-map"></i>
                  <h3>Our Address</h3>
                  <h4 style={{ color: 'white' }}><b>35, Ashirwa Plaza, 2nd Floor,</b><br /><b> Rajwada,indore (M,P)</b></h4>
                </div>
              </div>
              <div class="col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                <div class="info-box">
                  <i class="bx bx-envelope"></i>
                  <h3>Email Us</h3>
                  <h6><br /><a href="/" style={{ color: "white" }}><b>ashish.4tuners@gmail.com</b></a></h6>
                </div>
              </div>
              <div class="col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                <div class="info-box ">
                  <i class="bx bx-phone-call"></i>
                  <h3>Call Us</h3>
                  <p>+91 97556-41042<br />+91 95224-74600</p>
                </div>
              </div>

              {/* <div class="col-lg-12" data-aos="fade-up" data-aos-delay="300">
            <form action="forms/contact.php" method="post" role="form" class="php-email-form">
              <div class="form-row">
                <div class="col-lg-6 form-group">
                  <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div class="validate"></div>
                </div>
                <div class="col-lg-6 form-group">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                  <div class="validate"></div>
                </div>
              </div>
              <div class="form-group">
                <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                <div class="validate"></div>
              </div>
              <div class="form-group">
                <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                <div class="validate"></div>
              </div>
              <div class="mb-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div class="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div> */}

            </div>

          </div>
        </section>
        {/* End Contact Us Section */}
        {/* ======= Our Team Section ======= */}
        <section id="team" class="team">
          <div class="container">

            <div class="section-title">
              <h2 style={{ color: "#001524" }}><b>Our Team</b></h2>
              <p style={{ color: 'white' }}> Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.</p>
            </div>

            <div class="row">

            <div class="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up">
            <div class="member">
              <div class="pic"><img src="assets/img/team/team-1.jpg" class="img-fluid" alt=""/></div>
              <div class="member-info">
                <h4>Lakhan</h4>
                <span>Team Leader</span>
                <div class="social">
                  <a ><i class="icofont-twitter"></i></a>
                  <a ><i class="icofont-facebook"></i></a>
                  <a ><i class="icofont-instagram"></i></a>
                  <a ><i class="icofont-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div class="member">
              <div class="pic"><img src="assets/img/team/team-2.jpg" class="img-fluid" alt=""/></div>
              <div class="member-info">
                <h4>Aayush Yadav</h4>
                <span>Employees</span>
                <div class="social">
                  <a ><i class="icofont-twitter"></i></a>
                  <a ><i class="icofont-facebook"></i></a>
                  <a ><i class="icofont-instagram"></i></a>
                  <a ><i class="icofont-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div class="member">
              <div class="pic"><img src="assets/img/team/team-3.jpg" class="img-fluid" alt=""/></div>
              <div class="member-info">
                <h4>Piyush </h4>
                <span>Employees</span>
                <div class="social">
                  <a ><i class="icofont-twitter"></i></a>
                  <a ><i class="icofont-facebook"></i></a>
                  <a ><i class="icofont-instagram"></i></a>
                  <a ><i class="icofont-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div class="member">
              <div class="pic"><img src="assets/img/team/team-4.jpg" class="img-fluid" alt=""/></div>
              <div class="member-info">
                <h4>Tabish khan</h4>
                <span>Employees</span>
                <div class="social">
                  <a ><i class="icofont-twitter"></i></a>
                  <a ><i class="icofont-facebook"></i></a>
                  <a ><i class="icofont-instagram"></i></a>
                  <a ><i class="icofont-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Our Team Section */}
    </div>
      <Footerbar />
      
    </>


  )
}

export default Mainbar;