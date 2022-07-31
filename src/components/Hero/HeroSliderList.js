import fetchImages from 'components/services/API-Pixabay';
import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {
  SliderCarousel,
  SliderContainer,
  SliderLink,
} from './HeroSlider.styled';
const { Box } = require('components/Box');

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
        <SliderCarousel
          autoPlay="true"
          infiniteLoop={true}
          showThumbs={false}
          width="25%"
          showStatus={false}
          showIndicators={false}
          interval={5000}
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
        </SliderCarousel>
      </>
    );
  }
}
