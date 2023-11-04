import './Whychooseus.css';
import Card from "react-animated-3d-card";
import { useState } from "react";
import Headerbar from '../Headerbarcomponent/Headerbar';
import Footerbar from '../Footerbarcomponent/Footerbar';
function Whychooseus() {
  const [showFront, setShowFront] = useState("Max Verstappen");
  return (
      <div>
        <Headerbar />

           <div
      className="App"
      style={{
        padding: "200px",
        display: "flex",
        justifyContent: "space-between",
        alignContent: "center",
        // background: "linear-gradient(to right, black, #24243e)",
        height: "100vh"
      }}
    >
      <Card
        cursorPointer={false}
        shineStrength={0.75}
        style={{
          background: "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
          width: "300px",
          height: "400px",
          cursor: "pointer"
        }}
        onClick={() => setShowFront("Lewis Hamilton")}
      >
        <p>test</p>
        <div
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <div
            style={{
              fontSize: "30px",
              fontFamily: "Fira Code",
              color: "white"
            }}
            onClick={console.log("prova")}
          >
            <label>1234</label>
          </div>
        </div>
        <div>
          <label
            style={{
              color: "white",
              position: "absolute",
              bottom: "60px",
              left: "25px",
              opacity: 0.5
            }}
          >
            Card holder
          </label>
          <label
            style={{
              color: "white",
              position: "absolute",
              bottom: "60px",
              right: "25px",
              opacity: 0.5
            }}
          >
            Expires
          </label>
        </div>

        <div>
          <label
            style={{
              color: "white",
              position: "absolute",
              bottom: "25px",
              left: "25px",
              opacity: 1,
              fontSize: "25px"
            }}
          >
            {showFront}
          </label>
          <label
            style={{
              color: "white",
              position: "absolute",
              bottom: "25px",
              right: "25px",
              opacity: 1,
              fontSize: "25px"
            }}
          >
            10/22
          </label>
        </div>
      </Card>
      <Card
        cursorPointer={false}
        shineStrength={0.75}
        style={{
          background: "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
          width: "300px",
          height: "400px",
          cursor: "pointer"
        }}
        onClick={() => setShowFront("Lewis Hamilton")}
      >
        <p>test</p>
        <div
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <div
            style={{
              fontSize: "30px",
              fontFamily: "Fira Code",
              color: "white"
            }}
            onClick={console.log("prova")}
          >
            <label>1234</label>
          </div>
        </div>
        <div>
          <label
            style={{
              color: "white",
              position: "absolute",
              bottom: "60px",
              left: "25px",
              opacity: 0.5
            }}
          >
            Card holder
          </label>
          <label
            style={{
              color: "white",
              position: "absolute",
              bottom: "60px",
              right: "25px",
              opacity: 0.5
            }}
          >
            Expires
          </label>
        </div>

        <div>
          <label
            style={{
              color: "white",
              position: "absolute",
              bottom: "25px",
              left: "25px",
              opacity: 1,
              fontSize: "25px"
            }}
          >
            {showFront}
          </label>
          <label
            style={{
              color: "white",
              position: "absolute",
              bottom: "25px",
              right: "25px",
              opacity: 1,
              fontSize: "25px"
            }}
          >
            10/22
          </label>
        </div>
      </Card>
      <Card
        cursorPointer={false}
        shineStrength={0.75}
        style={{
          background: "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
          width: "300px",
          height: "400px",
          cursor: "pointer"
        }}
        onClick={() => setShowFront("Lewis Hamilton")}
      >
        <p>test</p>
        <div
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <div
            style={{
              fontSize: "30px",
              fontFamily: "Fira Code",
              color: "white"
            }}
            onClick={console.log("prova")}
          >
            <label>1234</label>
          </div>
        </div>
        <div>
          <label
            style={{
              color: "white",
              position: "absolute",
              bottom: "60px",
              left: "25px",
              opacity: 0.5
            }}
          >
            Card holder
          </label>
          <label
            style={{
              color: "white",
              position: "absolute",
              bottom: "60px",
              right: "25px",
              opacity: 0.5
            }}
          >
            Expires
          </label>
        </div>

        <div>
          <label
            style={{
              color: "white",
              position: "absolute",
              bottom: "25px",
              left: "25px",
              opacity: 1,
              fontSize: "25px"
            }}
          >
            {showFront}
          </label>
          <label
            style={{
              color: "white",
              position: "absolute",
              bottom: "25px",
              right: "25px",
              opacity: 1,
              fontSize: "25px"
            }}
          >
            10/22
          </label>
        </div>
      </Card>
      <Card
        cursorPointer={false}
        shineStrength={0.75}
        style={{
          background: "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
          width: "300px",
          height: "400px",
          cursor: "pointer"
        }}
        onClick={() => setShowFront("Lewis Hamilton")}
      >
        <p>test</p>
        <div
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <div
            style={{
              fontSize: "30px",
              fontFamily: "Fira Code",
              color: "white"
            }}
            onClick={console.log("prova")}
          >
            <label>1234</label>
          </div>
        </div>
        <div>
          <label
            style={{
              color: "white",
              position: "absolute",
              bottom: "60px",
              left: "25px",
              opacity: 0.5
            }}
          >
            Card holder
          </label>
          <label
            style={{
              color: "white",
              position: "absolute",
              bottom: "60px",
              right: "25px",
              opacity: 0.5
            }}
          >
            Expires
          </label>
        </div>

        <div>
          <label
            style={{
              color: "white",
              position: "absolute",
              bottom: "25px",
              left: "25px",
              opacity: 1,
              fontSize: "25px"
            }}
          >
            {showFront}
          </label>
          <label
            style={{
              color: "white",
              position: "absolute",
              bottom: "25px",
              right: "25px",
              opacity: 1,
              fontSize: "25px"
            }}
          >
            10/22
          </label>
        </div>
      </Card>
    </div>
<Footerbar />
</div>

    // <>
      /* <Headerbar fontcolor={"black"} /> */
  
   
     
    /* <section class="about-lists">


        <div class="container"  style={{width:"1200px"}}>

          <div class="row no-gutters" >
            <div class="section-title">
              <br/>
              <h2 style={{ color: "white",marginLeft:250 }}>Why choose us</h2>
              <p style={{ color: "white" ,marginLeft:200}} >Welcome to 4Tuners Technologies, where innovation meets excellence. Founded in November 2022,<br /> we are a dynamic and forward-thinking technology company committed to delivering cutting-edge <br/>solutions that empower businesses and individuals in the digital age.</p>
            </div>

            <div  class="col-lg-4 col-md-6 content-item" id='hover' data-aos="fade-up" >

              <h4 style={{ color: "white" }}>01</h4>
              <p style={{ color: "white" }}>Expertise: Our team consists of experienced developers and designers who are experts in their respective fields. We stay up-to-date with the latest industry trends to ensure that your projects are always on the cutting edge of technology.</p>
            </div>

            <div class="col-lg-4 col-md-6 content-item" id='hover' data-aos="fade-up" data-aos-delay="100">


              <h4 style={{ color: "white" }}> 02</h4>
              <p style={{ color: "white" }}> Client-Centric Approach: We put our clients at the center of everything we do. Your success is our success, and we work closely with you to understand your unique needs and objectives.</p>
            </div>
<br/>
            <div class="col-lg-4 col-md-6 content-item"  id='hover'data-aos="fade-up" data-aos-delay="200">

              <h4 style={{ color: "white" }}>03</h4>
              < p style={{ color: "white" }}>Quality: We are committed to delivering the highest quality work. Our solutions are thoroughly tested and optimized to ensure optimal performance and user satisfaction.</p>
            </div>

            <div class="col-lg-4 col-md-6 content-item" id='hover' data-aos="fade-up" data-aos-delay="300">
             
               <h4 style={{color:"white"}}>04</h4>
        <p style={{color:"white"}}>Innovation: Innovation is in our DNA. We love tackling challenging projects and finding creative solutions to complex problems.
Transparency: We believe in clear and open communication. You will be kept informed at every stage of your project, from inception to delivery.
Join Us on Your Digital Journey</p>
            </div>

            <div class="col-lg-4 col-md-6 content-item"  id='hover'data-aos="fade-up" data-aos-delay="400" i>
              <h4 style={{ color: "white" }}>05</h4>
              <p style={{ color: "white" }}>Whether you're a startup looking to make your mark, an established business seeking to expand your online presence, or an individual with a groundbreaking idea, 4Tuners Technologies is here to accompany you on your digital journey. We don't just build technology;</p>
            </div>

            <div class="col-lg-4 col-md-6 content-item" id='hover' data-aos="fade-up" data-aos-delay="500">
              
              <h4 style={{ color: "white" }}>06</h4>
              <p style={{ color: "white" }}>we build relationships, trust, and success stories.
Explore our portfolio, get in touch with us to discuss your project, and let's create something remarkable together. At 4Tuners Technologies, we're turning your dreams into digital reality.</p>
      </div>

       
   
          </div>
        </div>
      </section> */
      /* End  Lists Section */
      /* <Footerbar /> */


    /* </> */


  )
}

export default Whychooseus;