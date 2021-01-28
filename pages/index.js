import { useState, useRef, useEffect } from 'react';
import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from '@/components/BasePage';
import { Container, Row, Col } from "reactstrap";
import Typed from "react-typed";
import { useGetUser } from '@/actions/user';
import GetQuoteButton from "components/GetQuoteButton";
import GetServiceButton from "components/GetServiceButton";
import VideoBackground from 'components/videoBackground';
//import ImageBackground from 'components/imageBackground';
import WhatWeDo from 'components/whatWeDo';


const Index = () => {
  const [isFlipping, setIsFlipping] = useState(false);
  const flipInterval = useRef();
  const { data, loading } = useGetUser();


  useEffect(() => {
    startAnimation();
    return () => flipInterval.current && clearInterval(flipInterval.current)
  }, []);

  const startAnimation = () => {
    flipInterval.current = setInterval(() => {
      setIsFlipping(prevFlipping => !prevFlipping);
    }, 10000)
  }


  return (
    <BaseLayout
      user={data}
      loading={loading}
      navClass="transparent"
      className="cover">
      <BasePage indexPage title="Countertops for kitchen and bathroom">

        <div className="main-section">
          <VideoBackground />
          <Container>
            <Row>
              <Col md="6">
                <div className="hero-section">
                  <div className={`flipper ${isFlipping ? 'isFlipping' : ''}`}>
                    <div className="front">
                      <GetQuoteButton imagePath="/images/banner.jpg" />
                    </div>
                    <div className="back">
                      <GetServiceButton imagePath="/images/background.jpg" />
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6" className="hero-welcome-wrapper">
                <div className="hero-welcome-text">
                  <h1>
                    KITCHEN and BATHROOM REMODELING IN VIRGINIA, MARYLAND AND WASHINGTON DC
                </h1>
                </div>
                <div className="hero-welcome-bio">
                  <WhatWeDo />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </BasePage>
    </BaseLayout>
  );
};

export default Index;
