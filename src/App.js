import './App.css';
// import { Routes,Route } from 'react-router-dom';
// // import Headerbar from './components/Headerbarcomponent/Headerbar';
// import Mainbar from './components/Mainbarcomponent/Mainbar';
// import About from './components/Aboutcomponents/About';
// import Services from './components/Servicescomponent/Services';
// import Contact from './components/Contactcomponent/Contact';
// import Whychooseus from './components/Whychooseuscomponent/Whychooseus'
// import Register from './components/Registercomponent/Register';
// import Ourteam from './components/Ourteamcomponent/Ourteam';
// import Footerbar from './components/Footerbarcomponent/Footerbar';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap.min.js'



function App() {
    return (

        <>
       
           {/* < Headerbar />   */}
          {/* <Mainbar/>
           <Routes>
            <Route path="/" element={<Mainbar/>}/>
            <Route  path="/Aboutus" element={<About/>}> </Route>
            <Route  path="/Services" element={<Services/>}> </Route>
            <Route  path="/Contact" element={<Contact/>}> </Route>
            <Route  path="/Ourteam" element={<Ourteam/>}> </Route>
            <Route  path="/Whychooseus" element={<Whychooseus/>}> </Route>
            <Route  path="/Register" element={<Register/>}> </Route>
           </Routes>
          */}

{/* <Footerbar/> */}
 

 
 

    

   
<div class="container">
        <h2> Our Happy Clients </h2>
        <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, atque? Repudiandae
            possimus asperiores hic nemo id a molestiae minus impedit!</p>
    
        {/* <!-- Clients Review Section --> */}
        <div class="reviewSection">

        {/* <!-- Clients Review-1 Section Starts from Here  --> */}
            <div class="reviewItem">
                <div class="top">
                    <div class="clientImage">
                        <img src="./client.png" alt=""/>
                        <span>Raju Sheoran</span>
                    </div>
                    <ul>
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-regular fa-star"></i></li>
                        <li><i class="fa-regular fa-star"></i></li>
                    </ul>
                </div>
                <article>
                    <p class="review">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit beatae ipsa
                        voluptatibus perferendis quos eaque nemo error tempora harum quas, laudantium tenetur, neque,
                        facere exercitationem!</p>
                    <p>Jan 01, 2023</p>
                </article>
            </div>

        {/* <!-- Clients Review-2 Section Starts from Here  --> */}
            <div class="reviewItem">
                <div class="top">
                    <div class="clientImage">
                        <img src="./client.png" alt=""/>
                        <span>Raju Sheoran</span>
                    </div>
                    <ul>
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-regular fa-star"></i></li>
                        <li><i class="fa-regular fa-star"></i></li>
                    </ul>
                </div>
                <article>
                    <p class="review">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit beatae ipsa
                        voluptatibus perferendis quos eaque nemo error tempora harum quas, laudantium tenetur, neque,
                        facere exercitationem!</p>
                    <p>Jan 01, 2023</p>
                </article>
            </div>

        {/* <!-- Clients Review-3 Section Starts from Here  --> */}
            <div class="reviewItem">
                <div class="top">
                    <div class="clientImage">
                        <img src="./client.png" alt=""/>
                        <span>Raju Sheoran</span>
                    </div>
                    <ul>
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-regular fa-star"></i></li>
                        <li><i class="fa-regular fa-star"></i></li>
                    </ul>
                </div>
                <article>
                    <p class="review">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit beatae ipsa
                        voluptatibus perferendis quos eaque nemo error tempora harum quas, laudantium tenetur, neque,
                        facere exercitationem!</p>
                    <p>Jan 01, 2023</p>
                </article>
            </div>
        </div>
    </div>

 



        </>
    );
}

export default App;
