import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {
  CarouselStyled,
  // SliderCarousel,
  SliderContainer,
  // SliderLink,
} from './SliderHomePage.styled';
import 'react-multi-carousel/lib/styles.css';
import { NavLink } from 'react-router-dom';
import { SliderHomePageItem } from './SliderHomePageItem.styled';
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
export default class SliderHomePage extends Component {
  state = {
    hits: [],
  };

  componentDidMount() {
    const { data } = this.props;
    this.setState({ hits: data });
  }

  render() {
    const { moreDetails, location } = this.props;
    const posterPath = `https://image.tmdb.org/t/p/w500/`;

    return (
      <>
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
          {this.state.hits.length > 0 &&
            this.state.hits.map(
              ({ backdrop_path, id, original_title, name }) => {
                return (
                  <SliderContainer key={id}>
                    <NavLink
                      to={location.pathname === '/' ? `movies/${id}` : `${id}`}
                      state={{ from: location }}
                      onClick={() => moreDetails(id)}
                    >
                      <SliderHomePageItem
                        src={`${posterPath}${backdrop_path}`}
                        alt="poster"
                      />
                      {original_title || name}
                    </NavLink>
                  </SliderContainer>
                );
              }
            )}
        </CarouselStyled>
        {/* </SliderCarousel> */}
      </>
    );
  }
}
