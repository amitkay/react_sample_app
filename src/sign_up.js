import React from 'react';
import logo from './logo.svg';
import './App.css';
import './css/style.css';
import imf2 from './images/solar_img2.jpg';
import './fonts/material-icon/css/material-design-iconic-font.min.css';
import Fade from 'react-reveal/Fade';
import imf from './images/signup-image.jpg';
export default class sign_in extends React.Component
{
  render()
  {
return (
  
  <Fade right>
    <div >
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
    <title>Sign Up Form by Colorlib</title>
    {/* Font Icon */}
    <link
      rel="stylesheet"
      href="fonts/material-icon/css/material-design-iconic-font.min.css"
    />
    {/* Main css */}
    <link rel="stylesheet" href="css/style.css" />
    <div className="main">
      {/* Sign up form */}
      <section className="signup">
        <div className="container">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">Title 2</h2>
              
                <div className="form-group">
                <p>this is description 1 </p>
                </div>
                <div className="form-group">
                <p>this is description 2 </p>
                </div>
                <div className="form-group">
                <p>this is description 3 </p>
                </div>
                <div className="form-group">
                <p>this is description 4 </p>
                </div>
                <div className="form-group">
                <p>this is description 5 </p>
                </div>
                <div className="form-group form-button">
                <p>this is description 6 </p>
                </div>
              
            </div>
            <div className="signup-image">
              <figure>
                <img src={imf2} alt="sing up image" />
              </figure>
             
            </div>
          </div>
        </div>
      </section>
    </div>
    {/* JS */}
    {/* This templates was made by Colorlib (https://colorlib.com) */}
  </div>
  </Fade>
 );
}
}

