import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { Title } from './Section.styled';
import { theme } from 'constants/theme';

export const Section = ({ title, children }) => (
  <Box as="section" px={[2, 4, 6]} py={[3, 4, 4]}>
    <Box
      mx="auto"
      pt={[3, 3, 4]}
      pb={[4, 4, 4]}
      px={[3, 4, 4]}
      bg="white"
      boxShadow={theme.boxShadow.second}
      borderRadius={theme.radii.normal}
    >
      {title && <Title>{title}</Title>}
      {children}
    </Box>
  </Box>
);

Section.prototype = {
  title: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.object),
};
