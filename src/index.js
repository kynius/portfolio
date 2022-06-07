import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import my_photo from './img/me.jpeg'
import linkedin_icon from  './img/linkedin_icon.png'
import twitter_icon from './img/twitter_icon.png'
import github_icon from './img/github_icon.png'
import mail_icon from './img/mail_icon.png'
import {Col, Navbar, Row} from "react-materialize";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>
      <div style={{position: 'absolute', height: '200px', width:'100%', top: '40px', left:'0px'}} className={'transparent white-text'}>
          <div style={{marginLeft: '40px', borderRadius:'50%',boxShadow: '0 0 0 3px white', width: '105px', height: '105px'}}>
              <img alt={'me'} src={my_photo} style={{objectFit: 'cover'}} className={'circle image-in-navbar'}/>
          </div>
          <div className={'right links-in-navbar'}>
            <Row>
                <Col ><a className={'black-text'} href={'#'}>Projects</a></Col>
                <Col ><a className={'black-text'} href={'#'}>Me</a></Col>
                <Col ><a className={'black-text'} href={'#'}>👋</a></Col>
            </Row>
          </div>
      </div>
      <App/>
      <footer style={{position:'absolute', bottom:'0', minWidth:'100%', mixBlendMode: 'difference'}} className={'social-icon white center'}>
              <a href={''}><img alt={'github icon'} className={'social-icon'} src={github_icon}/></a>
              <a href={''}><img alt={'linkedin icon'} className={'social-icon'} src={linkedin_icon}/></a>
              <a href={''}><img alt={'twitter icon'} className={'social-icon'} src={twitter_icon}/></a>
              <a href={''}><img alt={'mail icon'} className={'social-icon'} src={mail_icon}/></a>
      </footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
