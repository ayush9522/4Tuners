import './Ourteam.css';
import Headerbar from '../Headerbarcomponent/Headerbar';
import Footerbar from '../Footerbarcomponent/Footerbar';



function Ourteam() {
  return (
<>
<Headerbar fontcolor={"black"}/>
 <br/><br/> 
{/* ======= Our Team Section ======= */}
<section id="team" class="team">
      <div class="container">

        <div class="section-title">
          <h2 style={{color:'#001524'}}><b>Our Team</b></h2>
          <p style={{color:'white'}}> Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.</p>
        </div>

        <div class="row">

          <div class="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up">
            <div class="member">
              <div class="pic"><img src="assets/img/team/team-1.jpg" class="img-fluid" alt=""/></div>
              <div class="member-info">
                <h4>Lakhan kanade</h4>
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

 <Footerbar/> 

 
</>
 
 
 )}

export default Ourteam;