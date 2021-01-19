import { navigate as GatsbyNav } from 'gatsby';

const Navigate = ({ to }) => {
  return GatsbyNav(to);
};

export default Navigate;
