import {Col, Container, Row} from "react-materialize";

function Contact() {
    return (
        <>
            <Container className={'center'} style={{paddingTop: '200px'}}>
                <Row>
                    <Col l={6} m={12} s={12} offset={'l3'}>
                        <input type={'text'} className={'browser-default center nickname-input'} placeholder={"What's your name?"} defaultValue={""}/>
                    </Col>  
                    <Col l={6} m={12} s={12} offset={'l3'} style={{paddingTop: '40px'}}>
                        <input type={'text'} className={'browser-default center nickname-input'} placeholder={"Let's talk about coffe!"}/>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Contact;
