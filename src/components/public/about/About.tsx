import React from "react";
import { Row, Col, Card, Image } from "antd";
import Picture from "../../../app/assets/images/Community.png";
import Real from "../../../app/assets/images/real_es.png";
import { Zoom } from "react-awesome-reveal";

const About = () => {
  return (
    <>
    <Zoom triggerOnce={true}>
      <Row id="about" justify="start">
        <h1 className="vision-header">Projects</h1>
      </Row>
      <Row justify="center" align="middle" gutter={20} style={{marginTop:"5%"}}>
        <Col span={12}>
          <Card
            title={
              <Image
                width={350}
                src={Picture}
                style={{ borderRadius: "8px" }}
              />
            }
            bordered={false}
            style={{
              background: "#0F1624",
              boxShadow: "0px 0px 12px #FFFFFF",
              borderRadius: "50px 0px",
              width: 400,
            }}
          >
            <h3
              style={{
                textAlign: "center",
                color: "#FFFFFF",
                fontWeight: 600,
                fontSize: "36px",
                lineHeight: "88.5%",
              }}
            >
              Project 1
            </h3>
            <hr
              style={{
                background:
                  "linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%)",
                color: "#13ADC7",
                borderColor: "#13ADC7",
                height: "3px",
              }}
            />
            <p
              style={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: "15px",
                color: "#FFFFFF",
              }}
            >
              We created this app after discovering a client in need of a system
              for his business. The concept of this app is for a user to
              register in their system. Following that, before a user can be
              validated as a member of their company, the user must first pay a
              membership fee, after which the admin will accept his application.
              After that, the user can ask others to join using his/her referral
              name and earn a commission for each person who registers using
              his/her referral name, and those who join can receive advantages
              and discounts on home improvement products.
            </p>
            <a href="https://www.communitybuildersalliance.com/" target="_blank" rel="noreferrer">Visit Website</a>
          </Card>
        </Col>
        <Col>
          <Card
            title={
              <Image width={350} src={Real} style={{ borderRadius: "8px" }} />
            }
            bordered={false}
            style={{
              background: "#0F1624",
              boxShadow: "0px 0px 12px #FFFFFF",
              borderRadius: "50px 0px",
              width: 400,
            }}
          >
            <h3
              style={{
                textAlign: "center",
                color: "#FFFFFF",
                fontWeight: 600,
                fontSize: "36px",
                lineHeight: "88.5%",
              }}
            >
              Project 2
            </h3>
            <hr
              style={{
                background:
                  "linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%)",
                color: "#13ADC7",
                borderColor: "#13ADC7",
                height: "3px",
              }}
            />
            <p
              style={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: "15px",
                color: "#FFFFFF",
              }}
            >
              This app is for real estate, and I built the backend environment
              with the Django Rest Framework and Swagger for documentation. The concept of the app is,
              the broker journey is where a broker can post a property linked to the
              seller account, and the seller will simply monitor or check
              his/her property, and the buyer journey is where he/she can view
              all properties in the feed posted by the broker, and he/she can
              contact the broker and strike a transaction.
            </p>
          </Card>
        </Col>
      </Row>
      </Zoom>
    </>
  );
};

export default About;
