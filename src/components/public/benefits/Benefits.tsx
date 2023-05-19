import React from "react";
import { Row, Col} from "antd";
import {  ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Bounce } from "react-awesome-reveal";

const Benefits = () => {
  return (
    <>
    <Bounce triggerOnce={true}>
      <Row id="about" justify="start">
        <h1 className="vision-header">Technologies</h1>
      </Row>
      <Row
        justify="center"
        align="middle"
        gutter={20}
        style={{ marginTop: "1%" }}
      >
        <Col span={12}>
          <Row>
            <Col span={12}>
              <h4
                style={{
                  color: "#FFFFFF",
                  fontStyle: "normal",
                  fontFamily: "Poppins",
                  fontWeight: 600,
                  lineHeight: "54px",
                }}
              >
                HTML
              </h4>
            </Col>
            <Col span={12}>
              <p
                style={{ color: "#FFFFFF", textAlign: "end", marginTop: "5%" }}
              >
                Advanced
              </p>
            </Col>
          </Row>
          <ProgressBar now={70} animated />
        </Col>
      </Row>
      <Row
        justify="center"
        align="middle"
        gutter={20}
        style={{ marginTop: "2%" }}
      >
        <Col span={12}>
          <Row>
            <Col span={12}>
              <h4
                style={{
                  color: "#FFFFFF",
                  fontStyle: "normal",
                  fontFamily: "Poppins",
                  fontWeight: 600,
                  lineHeight: "54px",
                }}
              >
                CSS, Sass & Bootstrap
              </h4>
            </Col>
            <Col span={12}>
              <p
                style={{ color: "#FFFFFF", textAlign: "end", marginTop: "5%" }}
              >
                Advanced
              </p>
            </Col>
          </Row>
          <ProgressBar now={70} animated />
        </Col>
      </Row>
      <Row
        justify="center"
        align="middle"
        gutter={20}
        style={{ marginTop: "2%" }}
      >
        <Col span={12}>
          <Row>
            <Col span={12}>
              <h4 style={{ color: "#FFFFFF" }}>Python</h4>
            </Col>
            <Col span={12}>
              <p
                style={{ color: "#FFFFFF", textAlign: "end", marginTop: "5%" }}
              >
                Regular
              </p>
            </Col>
          </Row>
          <ProgressBar now={50} animated />
        </Col>
      </Row>
      <Row
        justify="center"
        align="middle"
        gutter={20}
        style={{ marginTop: "2%" }}
      >
        <Col span={12}>
          <Row>
            <Col span={12}>
              <h4 style={{ color: "#FFFFFF" }}>Djano Rest Framework</h4>
            </Col>
            <Col span={12}>
              <p
                style={{ color: "#FFFFFF", textAlign: "end", marginTop: "5%" }}
              >
                Regular
              </p>
            </Col>
          </Row>
          <ProgressBar now={65} animated />
        </Col>
      </Row>
      <Row
        justify="center"
        align="middle"
        gutter={20}
        style={{ marginTop: "2%" }}
      >
        <Col span={12}>
          <Row>
            <Col span={12}>
              <h4 style={{ color: "#FFFFFF" }}>React</h4>
            </Col>
            <Col span={12}>
              <p
                style={{ color: "#FFFFFF", textAlign: "end", marginTop: "5%" }}
              >
                Regular
              </p>
            </Col>
          </Row>
          <ProgressBar now={50} animated />
        </Col>
      </Row>
      <Row
        justify="center"
        align="middle"
        gutter={20}
        style={{ marginTop: "2%" }}
      >
        <Col span={12}>
          <Row>
            <Col span={12}>
              <h4 style={{ color: "#FFFFFF" }}>Selenium (automation tool)</h4>
            </Col>
            <Col span={12}>
              <p
                style={{ color: "#FFFFFF", textAlign: "end", marginTop: "5%" }}
              >
                Beginner
              </p>
            </Col>
          </Row>
          <ProgressBar now={40} animated />
        </Col>
      </Row>
      <Row
        justify="center"
        align="middle"
        gutter={20}
        style={{ marginTop: "2%" }}
      >
        <Col span={12}>
          <Row>
            <Col span={12}>
              <h4 style={{ color: "#FFFFFF" }}>React Native</h4>
            </Col>
            <Col span={12}>
              <p
                style={{ color: "#FFFFFF", textAlign: "end", marginTop: "5%" }}
              >
                Beginner
              </p>
            </Col>
          </Row>
          <ProgressBar now={40} animated />
        </Col>
      </Row>
      </Bounce>

      <>
        <Row id="about" justify="start" style={{ marginTop: "4%" }}>
          <h5 className="vision-header">Additional technologies and skills</h5>
        </Row>
        <Row
          justify="center"
          align="middle"
          gutter={55}
          style={{ marginTop: "2%" }}
        >
          <Col>
            <h5 style={{ color: "white" }}>&#x2022; Git</h5>
          </Col>
          <Col>
            <h5 style={{ color: "white" }}>&#x2022; Javascript</h5>
          </Col>
          <Col>
            <h5 style={{ color: "white" }}>&#x2022; Teamwork</h5>
          </Col>
        </Row>
        <Row
          justify="center"
          align="middle"
          gutter={55}
          style={{ marginTop: "2%" }}
        >
          <Col>
            <h5 style={{ color: "white" }}>&#x2022; Communication</h5>
          </Col>
          <Col>
            <h5 style={{ color: "white" }}>
              &#x2022; Ability to Work in a Team
            </h5>
          </Col>
          <Col>
            <h5 style={{ color: "white" }}>&#x2022; Adaptability</h5>
          </Col>
        </Row>
      </>
    </>
  );
};

export default Benefits;
