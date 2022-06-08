import my_photo from "./img/me.jpeg";
import {Col, Row} from "react-materialize";
import React from 'react';
import github_icon from "./img/github_icon.png";
import linkedin_icon from "./img/linkedin_icon.png";
import twitter_icon from "./img/twitter_icon.png";
import mail_icon from "./img/mail_icon.png";

function Layout() {
    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>
            <div style={{position: 'absolute', height: '200px', width:'100%', top: '40px', left:'0px'}} className={'transparent white-text'}>
                <div style={{marginLeft: '40px', borderRadius:'50%',boxShadow: '0 0 0 3px white', width: '105px', height: '105px'}}>
                    <a href={'/'}>
                    <img alt={'me'} src={my_photo} style={{objectFit: 'cover'}} className={'circle image-in-navbar'}/>
                    </a>
                </div>
                <div className={'right links-in-navbar'}>
                    <Row>
                        <Col><a className={'black-text'} href={'/projects'}>Projects</a></Col>
                        <Col><a className={'black-text'} href={'/about'}>Me</a></Col>
                        <Col><a className={'black-text'} href={'/contact'}>👋</a></Col>
                    </Row>
                </div>
            </div>
            <footer style={{position:'absolute', bottom:'0', minWidth:'100%', mixBlendMode: 'difference'}} className={'footer white center'}>
                <a href={'/'}><img alt={'github icon'} className={'social-icon'} src={github_icon}/></a>
                <a href={'/'}><img alt={'linkedin icon'} className={'social-icon'} src={linkedin_icon}/></a>
                <a href={'/'}><img alt={'twitter icon'} className={'social-icon'} src={twitter_icon}/></a>
                <a href={'/'}><img alt={'mail icon'} className={'social-icon'} src={mail_icon}/></a>
            </footer>
        </>
    );
}

export default Layout;
