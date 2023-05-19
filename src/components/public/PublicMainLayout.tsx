import React from "react";
import { Layout, Row, Col } from "antd";
import { RouteComponentProps } from "react-router-dom";
import { Link } from "react-scroll";
//import MainFooter from "./footer/MainFooter";
import Picture from "../../app/assets/images/header-logo.png";
import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import { useHistory } from "react-router";

const { Content, Header } = Layout;

interface IProps extends RouteComponentProps {
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
}

const PublicMainLayout = ({ component, ...rest }: IProps) => {
  const Component = component;
  let history = useHistory();

  return (
    <>
      <Layout
        className="site-layout"
        style={{ backgroundColor: "#0F1624", height: "100%", margin: "auto" }}
      >
        <Header className="header-curve">
          <Row justify="space-around">
            <Col>
              <Row gutter={10}>
                <Col>
                  <img
                    src={Picture}
                    width="47.58px"
                    height="47.58px"
                    style={{ marginTop: "2%", transform: "rotate(-180deg)" }}
                    //className="home-picture"
                    alt=""
                  />
                </Col>
                <Col>
                  <h1
                    style={{
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: "500",
                      fontSize: "30px",
                      color: "#FFFFFF",
                      marginTop:"11%"
                    }}
                  >
                    jether.exe
                  </h1>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row gutter={55} justify="center" className="row-nav">
                <Col>
                  <Link
                    onClick={() => {
                      history.push("/");
                    }}
                    to=""
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="public-nav"
                  >
                    Home
                  </Link>
                </Col>
                <Col>
                  <Link
                    onClick={() => {
                      history.push("/projects");
                    }}
                    to=""
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="public-nav"
                  >
                    Projects
                  </Link>
                </Col>
                <Col>
                  <Link
                    onClick={() => {
                      history.push("/technologies");
                    }}
                    to=""
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="public-nav"
                  >
                    Technologies
                  </Link>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row gutter={20}>
              
                <Col>
                <a href="https://github.com/jether360" target="_blank" rel="noreferrer">
                  <GithubOutlined style={{ color: "#FFFFFF" }} />
                </a>
                </Col>
                <Col>
                <a href="https://www.linkedin.com/in/jether-balabagno-421b42204/" target="_blank" rel="noreferrer">
                  <LinkedinOutlined style={{ color: "#FFFFFF" }} />
                </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Component {...rest} />
        </Content>
        {/* <Footer className="public-footer">
          <MainFooter />
        </Footer>  */}
        {/*
        <Layout
          style={{
            backgroundColor: "#F69438",
            borderRadius: "50px",
            height: "100vh",
          }}
        />
        */}
      </Layout>
    </>
  );
};

export default PublicMainLayout;
