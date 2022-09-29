import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { Title } from './Section.styled';

export const Section = ({ title, children }) => (
  <Box as="section" py={[4]} bg="backgroundColor">
    <Box
      width="50%"
      mx="auto"
      p={[3]}
      bg="white"
      boxShadow="0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2)"
      borderRadius="0px 0px 4px 4px"
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
