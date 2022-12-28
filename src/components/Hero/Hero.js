import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from 'theme-ui';
import HeroImage from './HeroImage';
// import HeroSliderList from './HeroSliderList';

const Hero = () => {
  return (
    <Box as="section">
      <HeroImage />
      {/* <HeroSliderList /> */}
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Box>
  );
};

export default Hero;
