import './Headerbar.css';
import { Link } from 'react-router-dom';







function Headerbar(props) {

  console.log("fund" ,props.fontcolor
  ); 
  return (
<>
{/* ======= Top Bar ======= 
}
  <section  id="topbar" class="d-none d-lg-block">
    <div style={{position:'fixed',top:0}} class="container clearfix">
      <div class="contact-info float-left" style={{color:"white"}}>
        <i class="icofont-envelope"></i><a href="ashish.4tuners@gmail.com" style={{color:"white"}}>ashish.4tuners@gmail.com</a>
        <i class="icofont-phone" ></i><a href="+91-9755641042" style={{color:"white"}}>+91 - 97556 - 41042</a> 
      </div>
      <div class="social-links float-right">
        <a href="#" class="twitter"><i class="icofont-twitter"></i></a>
        <a href="#" class="facebook"><i class="icofont-facebook"></i></a>
        <a href="https://instagram.com/4tuners_technologies?igshid=MzRlODBiNWFlZA==" class="instagram"><i class="icofont-instagram"></i></a>
        <a href="#" class="skype"><i class="icofont-skype"></i></a>
        <a href="https://in.linkedin.com/company/4tuners-technologies" class="linkedin"><i class="icofont-linkedin"></i></a>
      </div>
    </div>

  </section>

  {/* ======= Header ======= */}
  <header style={{justifyContent:'space-between',}} id="header" >

    
    <div className="" style={{width:'90%',margin:'0 auto',marginRight:'50px'}}>

      <div class="logo float-left">
        <h1 class="text-light"><a href="/"><span><b style={{color:props.fontcolor}} >4Tuners Technologies</b></span></a></h1>
        {/* Uncomment below if you prefer to use an image logo */}
        {/* <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
      </div>
      
      <nav class="nav-menu float-right d-none d-lg-block"   style={{}} >
        
     
        <ul   >
        <li class="active"  ><a style={{color:props.fontcolor}} href="/" >Home</a></li>
          <li class="active"><Link style={{color:props.fontcolor}} to="/Aboutus">About us</Link></li>
          <li class="active"><Link style={{color:props.fontcolor}} to="/Services">Our Services</Link></li>
          <li  class="active" ><Link style={{color:props.fontcolor}} to="/Contact">Contact</Link></li>
          <li class="active"><Link style={{color:props.fontcolor}}  to="/Ourteam">Team</Link></li>
          <li class="active"><Link style={{color:props.fontcolor}} to="/Whychooseus">Why Choose Us</Link></li>
          <li class="active" style={{backgroundColor:"#445D48",borderRadius:"10px",marginLeft:"40px" ,fontSize:"10px",color:'white',}}><Link style={{}} to="/Register">Register</Link></li>
          {/* <a href="#about"><Link to="/">About Us</Link></a>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#team">Team</a></li>
          <li class="drop-down"><a href="">Drop Down</a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li class="drop-down"><a href="#">Drop Down 2</a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
              <li><a href="#">Drop Down 5</a></li>
            </ul>
          </li>
          <li><a href="#contact">Contact Us</a></li> */}
        </ul>
      </nav>{/* .nav-menu */}

    </div>
  </header>{/* End Header */}
                    





</>
 
 
 );
}

export default Headerbar;