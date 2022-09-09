import { FilmImage } from 'components/Pages/FilmDetails/FilmDetails.styled';
import propTypes from 'prop-types';
import { Box } from '../../Box';
import { NavItem, NavLink } from './SliderHomePageItem.styled';

const SliderHomePageItem = ({ data, moreDetails, location }) => {
  const posterPath = `https://image.tmdb.org/t/p/w500/`;
  return (
    <Box
      as="ul"
      display="grid"
      gridTemplateColumns="repeat(5, 1fr)"
      gridAutoRows="180px"
      justifyItems="center"
      p={3}
    >
      {data.map(({ backdrop_path, id, original_title, name }) => {
        return (
          <NavItem key={id}>
            <NavLink
              to={location.pathname === '/' ? `movies/${id}` : `${id}`}
              state={{ from: location }}
              onClick={() => moreDetails(id)}
            >
              <FilmImage src={`${posterPath}${backdrop_path}`} alt="poster" />
              {original_title || name}
            </NavLink>
          </NavItem>
        );
      })}
    </Box>
  );
};
SliderHomePageItem.propTypes = {
  moreDetails: propTypes.func.isRequired,
  data: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      original_title: propTypes.string,
      name: propTypes.string,
    })
  ),
};

export default SliderHomePageItem;
