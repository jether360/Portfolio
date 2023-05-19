import React from "react";
import { Row, Col,Button } from "antd";
import { useHistory } from "react-router";
import { AttentionSeeker, Slide } from "react-awesome-reveal";


const Home = () => {
  let history = useHistory();
  return (
    <>
    <Slide triggerOnce={true}>
    <Row>
      </Row>
      <Row justify="center" className="home-row">
        <Col>
        <Row style={{marginTop:"5%"}}> 
          <Col span={24}>
          <h5 style={{color: "#FFFFFF",textTransform:"uppercase"}}>
            Software Developer
          </h5>
          <h1
            style={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: 64,
              color: "#FFFFFF",
            }}
          >
            Hello, my name is <br/>Jether B. Balabagno
          </h1>
          </Col>
          <Col>
          <AttentionSeeker effect="flash">
          <p
            style={{
              fontStyle: "Poppins",
              fontFamily: "Inter",
              fontWeight: 600,
              fontSize: 25,
              color: "#BCBCBC",
              lineHeight: "54px"
            }}
          >
            I am a new developer eager to learn and grow in this profession.
            <br/>I'm currently focusing on backend development developing Rest APIs with the <br/>Django Rest Framework and frontend development with React JS.
            <br/>If given the opportunity to join your company, I am willing to make an adjustment in any language.
          </p>
          </AttentionSeeker>
          <Button
            style={{background:"linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%)", border:"none", borderRadius:"83px", color:"#FFFFFF"}}
            onClick={() => {
              history.push("/projects");
            }}
          >
            Projects
          </Button>
          <Button
            style={{background:"linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%)", border:"none", borderRadius:"83px", color:"#FFFFFF", marginLeft:"3%"}}
            href="https://www.linkedin.com/in/jether-balabagno-421b42204/" target="_blank" rel="noreferrer"
          >
            LinkedIn
          </Button>
          </Col>
          </Row>
          {/* <About /> */}
        </Col>
      </Row>
  
      {/* <Benefits/>
      <Offers/>  */}
      </Slide>
    </>
  );
};

export default Home;
