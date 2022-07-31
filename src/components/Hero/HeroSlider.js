import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '../Box';
import HeroSliderList from './HeroSliderList';

const HeroSlider = () => {
  return (
    <Box>
      <HeroSliderList />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Box>
  );
};

export default HeroSlider;
