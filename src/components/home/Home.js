import React from "react";
import ReactPlayer from "react-player";
import "./Home.css";
import NedenBercislina from "../home/neden/Neden.js";
import Mail from "../iletisim/ContactForm";
import Owl from "../slider/owlcarousel/Owl";
import Klinik from "../klinik/Klinik.js";

import Test from "../test/Test";



import TopluHizmet from "../topluhizmet/TopluHizmet.js";


function Home() {
  return (
    <div>
 
      <div className="row">
        
      <h2 className="doktorlarTitle" style={{textAlign:"center",fontSize:"large",marginTop:"1rem",color:"#B39862",fontFamily:"sans-serif"}}>Kayıtlarımız Başlamıştır</h2>
         <Klinik/>
      </div>
     
      
      <br/>
      <hr/>
     
      <div className="col-12">
            <NedenBercislina/>
      </div>
      
      <br/>
      <hr/>
      <div className="row">
        <TopluHizmet/>
      </div>
        

      <hr/>
      
      
      <div className="row">
      <h2 className="doktorlarTitle" style={{textAlign:"center",fontSize:"large",color:"#B39862",fontFamily:"sans-serif"}}>Hizmetlerimiz</h2>
         <Owl/>
      </div>
      <br/>
      <div className="col-12">
            <Mail/>
      </div>
      <br/>
      <div className="row m-2">
      <h2 className="doktorlarTitle" style={{textAlign:"center",fontSize:"large",color:"#B39862",fontFamily:"sans-serif"}}>Lokasyonumuz</h2>
        <div className="col-lg-12  col-12 harita" style={{marginTop:"2.5rem"}}>
                      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2565.6973061632702!2d38.7932798258171!3d37.16504463578548!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5ecc2ac358e8eb1a!2s%C5%9Eanl%C4%B1urfa%20Titanyum%20Beauty%20Salonu!5e0!3m2!1str!2str!4v1667919713797!5m2!1str!2str" 
                  className="googleharita" style={{width:"100%", height:"45rem", frameBorder:"0", allowFullScreen:"",referrerpolicy:"no-referrer-when-downgrade", ariaHidden:"false", tabIndex:"0",border:"2px #B39862 solid",paddingBottom:"0.5rem",paddingTop:"0.5rem"}}> </iframe>
                  
            </div> 

      </div>

    </div>
  );
}

export default Home;
