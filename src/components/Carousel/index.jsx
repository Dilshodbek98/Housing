import { Blur, Container, Content, Main, Slide, Wrapper } from "./style";
import img1 from "../../assets/images/house1.jpg";
import Slider from "react-slick";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToScroll: 1,
    arrows: true,
    appendDots: (dots) => (
      <div
        style={{
          color: "blue",
          backgroundColor: "transparent",

          transform: "translateY(-40px)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };
  return (
    <Container>
      <Main>
        <Wrapper>
          <Slider {...settings}>
            <Slide>
              <img src={img1} alt=''/>
              <Blur />
              <Content>
                <Content.Title>Skyper Pool Partment</Content.Title>
                <Content.Desc>
                  112 Glenwood Ave Hyde Park, Boston, MA
                </Content.Desc>
                <Content.Price>$5,250/month</Content.Price>
              </Content>
            </Slide>
            <Slide>
              <img src={img1} alt=''/>
              <Blur />
              <Content>
                <Content.Title>Skyper Pool Partment</Content.Title>
                <Content.Desc>
                  112 Glenwood Ave Hyde Park, Boston, MA
                </Content.Desc>
                <Content.Price>$5,250/month</Content.Price>
              </Content>
            </Slide>
            <div>
              <h1>qweqw</h1>
            </div>
          </Slider>
        </Wrapper>
      </Main>
    </Container>
  );
};

export default Carousel;
