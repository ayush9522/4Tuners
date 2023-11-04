import './About.css';

import Headerbar from '../Headerbarcomponent/Headerbar';
 import Footerbar from '../Footerbarcomponent/Footerbar';
function About() {
  return (
<>

 <Headerbar fontcolor={"black"}/> 
<br/><br/>

{/* ======= About Us Section ======= */}
<section id="about" class="about">
  <div class="container">

    <div class="row no-gutters">
      <div class="col-lg-6 video-box" style={{backgroundColor:"#001524" ,height:"480px" ,borderRadius:"25px", marginTop:"9px" ,paddingLeft:"27px"}}>
      <video autoPlay loop muted plays-Inline style={{width:"500px",height:"300px" , borderRadius:"50px", marginTop:"85px", marginRight:"25px"}}>
        
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
          <h2 style={{color:"white"}}>About Us</h2>
          <p style={{color:"white"}}>Welcome to 4Tuners Technologies, where innovation meets excellence. Founded in November 2022, we are a dynamic and forward-thinking technology company committed to delivering cutting-edge solutions that empower businesses and individuals in the digital age.</p>
        </div>
        <div class="section-title">
          <h2 style={{color:"white"}}>Our Mission</h2>
          <p style={{color:"white"}}>Our mission is to make technology accessible and transformative. We believe that technology should not be a barrier, but a bridge, enabling businesses to thrive and individuals to realize their digital aspirations. We are committed to providing top-notch, tailor-made solutions that help our clients achieve their goals.</p>
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

{/* ======= About Lists Section ======= 
<section class="about-lists">
  
  <div class="container">
    <div class="row no-gutters">
         
      <div class="col-lg-4 col-md-6 content-item" data-aos="fade-up">
     
        <span> <img src="assets/img/portfolio/portfolio-1.jpg" class="img-fluid" alt=""></img></span>
        
        <h4 style={{color:"white"  }}>React Native,</h4>
        <p  style={{color:"white"}}>Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat</p>
      </div>
    
      <div class="col-lg-4 col-md-6 content-item" data-aos="fade-up" data-aos-delay="100">
        
        <span> <img src="assets/img/portfolio/portfolio-1.jpg" class="img-fluid" alt=""></img></span>
        <h4  style={{color:"white"}}> React JS,</h4>
        <p  style={{color:"white"}}> Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest</p>
      </div>

      <div class="col-lg-4 col-md-6 content-item" data-aos="fade-up" data-aos-delay="200">
        <span> <img src="assets/img/portfolio/portfolio-1.jpg" class="img-fluid" alt=""></img></span>
        <h4  style={{color:"white"}}> Node JS,</h4>
        < p  style={{color:"white"}}>Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis</p>
      </div>

      <div class="col-lg-4 col-md-6 content-item" data-aos="fade-up" data-aos-delay="300">
        <span> <img src="assets/img/React-icon.svg-removebg-preview.png" class="img-fluid" alt=""></img></span>
        <h4 style={{color:"white"}}>Mongo DB</h4>
        <p style={{color:"white"}}>Inventore quo sint a sint rerum. Distinctio blanditiis deserunt quod soluta quod nam mider lando casa</p>
      </div>

      <div class="col-lg-4 col-md-6 content-item" data-aos="fade-up" data-aos-delay="400">
        <span> <img src="assets/img/portfolio/portfolio-1.jpg" class="img-fluid" alt=""></img></span>
        <h4 style={{color:"white"}}>Firebase,</h4>
        <p style={{color:"white"}}>Vitae dolorem in deleniti ipsum omnis tempore voluptatem. Qui possimus est repellendus est quibusdam</p>
      </div>

      <div class="col-lg-4 col-md-6 content-item" data-aos="fade-up" data-aos-delay="500">
        <span> <img src="assets/img/portfolio/portfolio-1.jpg" class="img-fluid" alt=""></img></span>
        <h4 style={{color:"white"}}>Next JS,</h4>
        <p style={{color:"white"}}>Quis eum numquam veniam ea voluptatibus voluptas. Excepturi aut nostrum repudiandae voluptatibus corporis sequi</p>
      </div>
      
      {/* <div class="col-lg-4 col-md-6 content-item" data-aos="fade-up" data-aos-delay="500">
        <span> <img src="assets/img/portfolio/portfolio-1.jpg" class="img-fluid" alt=""></img></span>
        <h4 style={{color:"white"}}>WordPress,</h4>
        <p style={{color:"white"}}>Quis eum numquam veniam ea voluptatibus voluptas. Excepturi aut nostrum repudiandae voluptatibus corporis sequi</p>
      </div>
    </div>
     */}

{/* End About Lists Section */}
<Footerbar/> 
 


</>
 
 
 )}

export default About;