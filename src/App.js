import React from 'react';
import logo from './logo.svg';
import './App.css';
import imf from './images/Capture.PNG';
import './css/style.css';
import { DefaultPlayer as Video } from 'react-html5video';
import sample_vid from './videoplayback.mp4'
import './style.css';
import Abt_2 from './sign_up';
import Fade from 'react-reveal/Fade';
import './style2.css';
import w3_img from './css/w3img.jpg';
class App extends React.Component {
  render()
 {
 
  return (
    <Fade> 
       <div  className="body_back">

    <meta charSet="utf-8" />
    <title>Peeche toh DEkho</title>
    <link rel="stylesheet" href="style.css" />
    <div className="banner">
      <Video autoPlay muted loop> 
        <source src={sample_vid} type="video/mp4" />
      </Video>
      <div className="content">
        <h1>Unleash the Madness</h1>
        <br /><br />
        <a className="example_c" href="add-website-here" target="_blank" rel="nofollow noopener">Add Call to Action</a>
      </div>
    </div>
    <Fade left>
    <div className="main" >
    {/* Sing in  Form */}
    <section className="sign-in">
      <div className="container">
        <div className="signin-content">
          <div className="signin-image">
            <figure>
              <img src={imf} alt="sing up image" />
            </figure>
            
          </div>
          <div className="signin-form">
            <h2 className="form-title">Title 1</h2>
              <div className="form-group">
                <p> this is description box1</p>
              </div>
              <div className="form-group form-button">
              <p> this is description box2</p>
              
              </div>
            <div className="social-login">
            <p> this is description box3</p>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
    </Fade>
<Abt_2 />
  

  
  </div>
  
  </Fade>

  );
  }
}

export default App;
