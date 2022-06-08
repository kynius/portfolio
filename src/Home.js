import './App.css';
import './index.css';
import {Col, Container, Row} from "react-materialize";
import my_photo from './img/me.jpeg'
function Home() {
    return (
        <>
            <Container className={'container-on-home-page'}>
                <Row>
                    <Col style={{mixBlendMode: "difference"}} className={'white-text'}>Hey my name is Krzysztof</Col>
                    <Col>🙋‍♂️</Col>
                </Row>
                <Row>
                    <Col className={'white-text'}>I'm a </Col>
                    <Col className={'webDeveloper'}>full-stack web developer</Col>
                </Row>
                <Row style={{mixBlendMode: "difference"}} className={'white-text'}><Col>based in Poland. I'm having</Col></Row>
                <Row style={{mixBlendMode: "difference"}} className={'white-text'}><Col>a lot of</Col><Col className={'funWithProgramming'}>fun with programming</Col></Row>
            </Container>
        </>
    );
}

export default Home;
