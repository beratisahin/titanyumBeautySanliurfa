import "./Foooter.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import EmailIcon from "@material-ui/icons/Email";
import HomeIcon from "@material-ui/icons/Home";
import YouTubeIcon from '@material-ui/icons/YouTube';
import SettingsPhoneIcon from "@material-ui/icons/SettingsPhone";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MainLogo2 from "../header/PNG.png";



import React, { Component } from "react";

export default class Foooter extends Component {

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  render() {
    return (
      <div id="footer">
        <div class="row p-4" style={{ backgroundColor: "white", height:"auto" }}>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12" style={{ fontSize: "15px",marginBottom:"2rem"  }}>
            <a href="/" title="Şanlıurfa Titanyum Beauty Güzellik Merkezi" alt="Şanlıurfa Titanyum Beauty Güzellik Merkezi">
              <img
                src={MainLogo2}
                alt="logo"
                style={{ width: "24rem", height: "18rem",display:"block",align:"center",margin:"auto" }}
              ></img>
            </a>
            <p
              className="mt-4"
              style={{
                fontSize: "14px",
                fontFamily:"sans-serif",
                textAlign: "justify",
                textIndent: "1px",
              }}
            >
              {" "}
              Şanlıurfa Titanyum Beauty Güzellik Merkezi olarak hastalarımıza ve danışanlarımıza farklı medikal alanlarda hizmet sunmaktayız. Medikal estetikten saç ekimine kadar, son teknoloji cihazlarımız ve uzman ekibimizle her adımda yanınızdayız.

Şanlıurfa Titanyum Beauty Güzellik Merkezi olarak, hastalarımıza ulaşmak istedikleri görünümü kazandırmak için farklı tedavi seçenekleri sunuyoruz. 
            </p>
          </div>


          <div className="col-lg-4 col-md-6 col-sm-6 col-12" style={{ fontSize: "12px",marginBottom:"2rem"  }}>
            <b style={{ color: "#B39862", fontSize: "18px" }}>Çalışma Takvimi</b>
            <hr/>
            <table class="table table-striped" >
                    
                    <tbody>
                        <tr style={{height:"2px"}}>
                            <td>Pazartesi</td>
                            <td>09:00 - 19:00</td>
                        </tr>
                        <tr>
                            <td>Salı</td>
                            <td>09:00 - 19:00</td>
                        </tr>
                        <tr>
                            <td>Çarşamba</td>
                            <td>09:00 - 19:00</td>
                        </tr>
                        <tr>
                            <td>Perşembe</td>
                            <td>09:00 - 19:00</td>
                        </tr>
                        <tr>
                            <td>Cuma</td>
                            <td>09:00 - 19:00</td>
                        </tr>
                        <tr>
                            <td>Cumartesi</td>
                            <td>09:00 - 19:00</td>
                        </tr>
                        <tr>
                            <td>Pazar</td>
                            <td>09:00 - 19:00</td>
                        </tr>
                      
                    </tbody>
                    
                    </table>
                   
                        <p style={{color:"red",fontSize:"13px"}}></p>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6 col-12" style={{ fontSize: "15px",marginBottom:"2rem"  }}>
            <p style={{ color: "#B39862", fontWeight: "bold", fontSize: "18px" }}>
              Şanlıurfa Titanyum Beauty Saloon
            </p>
            <hr/>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ float: "left" }}
            >
              <FacebookIcon className="icon" style={{fontSize:"24px"}}/>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ float: "left", textIndent: "10px" }}
            >
              <InstagramIcon className="icon" style={{fontSize:"24px",color:"purple"}}/>
            </a>
            <a
              href="https://wa.me/+905056396363"
              target="_blank"
              rel="noopener noreferrer"
              style={{ float: "left", textIndent: "10px" }}
            >
              <WhatsAppIcon className="icon" style={{fontSize:"24px",color:"lightgreen"}}/>
            </a>
            <a
              href="tel: +905056396363"
              target="_blank"
              rel="noopener noreferrer"
              style={{ float: "left", textIndent: "10px" }}
            >
              <SettingsPhoneIcon className="icon" style={{fontSize:"24px"}} />
            </a>
            <br/>
            <p style={{ fontSize: "14px", textAlign: "left" }}>
              {" "}
              <a href="mailto:titanyum.beauty.63@gmail.com">
                <EmailIcon style={{fontSize:"24px"}}/>
              </a>
              &nbsp;
              titanyum.beauty.63@gmail.com  
            </p>
            <p style={{  fontSize: "14px", textAlign: "left" }}>
              {" "}
              <a
                href="tel: +905056396363"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SettingsPhoneIcon style={{fontSize:"24px"}}/>
              </a>
              &nbsp;
              0505 639 63 63  <FontAwesomeIcon icon="coffee" size="lg" />
            </p>
            <p style={{  fontSize: "14px", textAlign: "left" }}>
              
              <a 
                href="https://goo.gl/maps/UFT5qkYYV8tXavSYA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HomeIcon style={{fontSize:"24px"}}/>
              </a>
              &nbsp;
              Şair Şevket Mah. Atatürk Bulvarı No:24/4 <br/> Haliliye / Şanlıurfa{" "}

             
            </p>
          </div>





          <div className="col-12">
            
            <hr/> 
                    <div className="patent" >
                        
                            <p style={{fontSize:"12px",paddingLeft:"1rem",float:"left"}}> ©2021 All Rights Reserved</p> 
                            &nbsp; &nbsp;
                            <a className="sebertech" href="tel: +905449125561"
                               target="_blank" 
                               rel="noopener noreferrer"
                               style={{fontSize:"12px",paddingRight:"1rem",float:"right",textAlign:"right",color:"black"}}> ®Se<b>B</b>er Tech</a>
                    </div>
          </div>


          <div className="roof-location">
              <a href="https://goo.gl/maps/7ryRSpGz7PPH1rZW9" className="location_float" target="_blank" rel="noopener noreferrer">
                  <LocationOnIcon className="location-icon"/>
              </a>
          </div>

          <div className="roof-phone">
              <a href="tel: +905056396363" className="phone_float" target="_blank" rel="noopener noreferrer">
                  <PhoneIcon className="phone-icon"/>  
              </a>
          </div>

          <div className="roof-whatsapp">
              <a href="https://wa.me/+905056396363" className="whatsapp_float" target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="whatsapp-icon"/>
              </a>
          </div>

        </div>

        
      </div>
    );
  }
}
