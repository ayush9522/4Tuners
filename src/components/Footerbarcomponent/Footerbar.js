import './Footerbar.css';
import { Link } from 'react-router-dom';
function Footerbar() {
  return (
<>

{/* ======= Footer ======= */}
  <footer id="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">

          <div class="col-lg-3 col-md-6 footer-info">
            <h3 style={{color:"white"}}>4Tuners Technologies</h3>
            <p>
            35, Ashirwa Plaza, 2nd Floor, <br/>
            Rajwada,indore (M,P)<br/><br/>
              <strong>Phone:</strong> +91 97556-41042<br/>
              <strong>Email:</strong> ashish.4tuners@gmail.com<br/>
            </p>
            <div class="social-links mt-3">
              <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
              <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
              <a href="https://instagram.com/4tuners_technologies?igshid=MzRlODBiNWFlZA==" class="instagram"><i class="bx bxl-instagram"></i></a>
              <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
              <a href="https://in.linkedin.com/company/4tuners-technologies" class="linkedin"><i class="bx bxl-linkedin"></i></a>
            </div>
          </div>

          <div class="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><Link to="/Aboutus">About us</Link></li>
              <li> <Link to="/services">Our Services</Link></li>
              <li> <Link to="/Contact">Contact</Link></li>
              <li> <Link to="/Ourteam">Team</Link></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li> <a href="Services">React.Js</a></li>
              <li> <a href="Services">React Native</a></li>
              <li> <a href="Services">Node.Js</a></li>
              <li> <a href="Services">WordPress</a></li>
              <li> <a href="Services">Firebase</a></li>
            </ul>
          </div>

          <div class="col-lg-4 col-md-6 footer-newsletter">
            {/* <h4>Our Newsletter</h4>
            <p style={{color:"white"}}>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p> */}
            <form action="" method="post">
              <input type="email" name="email"/> <a href='/'  type="submit" value="Subscribe" style={{color:"white",marginLeft:"20px",fontSize:"large"}}>Subscribe</a>  
            </form>

          </div>
          </div>

        </div>
      </div>
    

    {/* <div class="container"> */}
      {/* <div class="copyright">
        &copy; Copyright <strong><span style={{color:"white"}}>4Tuners Technologies</span></strong>. All Rights Reserved
      </div> 
      <div class="credits">
        {/* All the links in the footer should remain intact. */}
        {/* You can delete the links only if you purchased the pro version. */}
        {/* Licensing information: https://bootstrapmade.com/license/ */}
        {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/mamba-one-page-bootstrap-template-free/ */}
        {/* Designed by <a href="https://bootstrapmade.com/" style={{color:"white"}}><h5>4Tuners developer</h5></a>
      </div>
    </div> */}
  
  </footer>
  {/* End Footer */}

 




</>
 
 
 )}

export default Footerbar;