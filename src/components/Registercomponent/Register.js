import './Register.css';
import { useState } from 'react';
import axios from 'axios';
import Headerbar from '../Headerbarcomponent/Headerbar';
import Footerbar from '../Footerbarcomponent/Footerbar';
import '../../css/main.css'
function Register() {


  const [firstname,setFirstName]=useState('')
  const [lastname,setLastName]=useState('')
  const [email,setEmail]=useState('')
  const [mobile,setMobile]=useState('')
  const [massage,setMassage]=useState('')
  

  const handleSubmit=(e)=>{
    e.preventDefault();
    // console.log(name,email,password,comfirmpassword);
    const data={
      FirstName:firstname,
      LastName:lastname,
      Email:email,
      Mobile:mobile,
      Massage:massage,
    }
    axios.post('https://sheet.best/api/sheets/4443eb17-ca86-41e8-8f9c-5bda03cc6be4',data).then((response)=>{
      console.log(response);
      setFirstName('');
      setLastName('');
      setEmail('');
      setMobile('');
      setMassage('')
     
    })

  }







  return (
    <>
      <Headerbar fontcolor={"black"}/>
      
    
      {/* Required meta tags*/}
     
      
      {/* Title Page*/}
      

      {/* Icons font CSS*/}
      {/* <link href="Newfolder/vendor/mdi-font/css/material-design-iconic-font.min.css" rel="stylesheet" media="all"></link>
      <link href="Newfolder/vendor/font-awesome-4.7/css/font-awesome.min.css" rel="stylesheet" media="all"></link> */}
      {/* Font special for pages*/}
      {/* <link href="https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet"></link> */}

      {/* Vendor CSS*/}
      {/* <link href="Newfolder/vendor/select2/select2.min.css" rel="stylesheet" media="all"></link> */}
      {/* <link href="Newfolder/vendor/datepicker/daterangepicker.css" rel="stylesheet" media="all"></link> */}

      {/* Main CSS*/}
      {/* <link href="Newfolder/css/main.css" rel="stylesheet" media=""></link> */}


      <div class="page-wrapper  p-t-180 p-b-100 font-poppins" >
        <div class="wrapper wrapper--w780" >
          <div class="card card-3">
             {/* <div class="" > <img src="assets/img/reg.jpg" class="img-fluid" alt=""/></div>  */}
           <form style={{width:'40%',justifyContent:'flex-end',alignSelf:'flex-end', color:'black' ,display:'flex',}} 
           method="POST"  onSubmit={handleSubmit}>
            
           <div class="card-body"style={{width:'20%'}} >
            
              <h2 class="title" style={{color:"black",fontSize:"20px"}}><b>Registration Here!!!</b></h2>
              <form >
                <div class="input-group" >           
                  <input style={{borderBottom:'solid black'}} class="input--style-3" type="text" placeholder="First Name" name="name"
                  onChange={(e) => setFirstName(e.target.value)} value={firstname}></input>
                </div>
                <div class="input-group">
                  <input style={{borderBottom:'solid black'}}  class="input--style-3" type="text" placeholder="Last Name" name="name"
                  onChange={(e) => setLastName(e.target.value)} value={lastname}></input>
                </div>

                <div class="input-group">
                  <input style={{borderBottom:'solid black'}} class="input--style-3" type="email" placeholder="Email" name="email" 
                  onChange={(e) => setEmail(e.target.value)} value={email}></input>
                </div>
                <div class="input-group">
                            <input style={{borderBottom:'solid black'}} class="input--style-3" type="text" placeholder="Mobile" name="name"
                            onChange={(e) => setMobile(e.target.value)} value={mobile}></input>
                        </div>
                <div class="input-group">
                            <input style={{borderBottom:'solid black'}} class="input--style-3" type="text" placeholder="Massage" name="name"
                            onChange={(e) => setMassage(e.target.value)} value={massage}></input>
                        </div>
                
                <div class="p-t-10">
                  <button style={{backgroundColor:"#445D48",}} class="btn btn--pill btn--green" type="submit">Submit</button>
                </div>
              </form>
            </div>
           </form>
          </div>
        </div>
      </div>


      {/* Jquery JS*/}
      <script src="Newfolder/vendor/jquery/jquery.min.js"></script> 
      {/* Vendor JS*/}
       <script src="Newfolder/vendor/select2/select2.min.js"></script>
      <script src="Newfolder/vendor/datepicker/moment.min.js"></script>
      <script src="Newfolder/vendor/datepicker/daterangepicker.js"></script> 

      {/* Main JS*/}
      <script src="Newfolder/js/global.js"></script>

      {/* This templates was made by Colorlib (https://colorlib.com)
 */}

      {/* end document*/}
  
      <Footerbar />







    </>


  )
}

export default Register;