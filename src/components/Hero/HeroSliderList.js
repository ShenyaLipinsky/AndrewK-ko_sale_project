import fetchImages from 'components/services/API-Pixabay';
import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {
  CarouselStyled,
  // SliderCarousel,
  SliderContainer,
  SliderLink,
} from './HeroSlider.styled';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 7,
    slidesToSlide: 1,
    partialVisibilityGutter: 40,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 1,
    partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 1,
    partialVisibilityGutter: 20,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 1,
    partialVisibilityGutter: 10,
  },
};
export default class HeroSliderList extends Component {
  state = {
    hits: [],
  };
  componentDidMount() {
    fetchImages().then(res => {
      this.setState({ hits: [...res] });
    });
  }

  render() {
    return (
      <>
        <h2> Some Title </h2>
        {/* <SliderCarousel
          autoPlay="true"
          infiniteLoop={true}
          showThumbs={false}
          width="25%"
          showStatus={false}
          showIndicators={false}
          interval={5000}
        > */}
        <CarouselStyled
          swipeable={true}
          draggable={true}
          // showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          // infinite={true}
          autoPlay={this.props.deviceType !== 'mobile' ? true : false}
          autoPlaySpeed={5000}
          keyBoardControl={true}
          customTransition="transform 5000ms cubic-bezier(0, 0, 0, 0) 0s"
          // transitionDuration={2000}
          containerClass="carousel-container"
          rewind={true}
          rewindWithAnimation={true}
          removeArrowOnDeviceType={['tablet', 'mobile']}
          deviceType={this.props.deviceType}
          // dotListClass="custom-dot-list-style"
          // centerMode={true}
          focusOnSelect={true}
          itemClass="carousel-item-padding-40-px"
        >
          {this.state.hits &&
            this.state.hits.map(({ id, webformatURL, fullInfoLink }) => {
              return (
                <SliderContainer key={id}>
                  <img src={webformatURL} alt="*" />
                  <SliderLink href={fullInfoLink} />
                </SliderContainer>
              );
            })}
        </CarouselStyled>
        {/* </SliderCarousel> */}
      </>
    );
  }
}
