import styled from "styled-components/macro";
import { breakpoints } from "../MediaQueries";

const sizes = {
  hero: {
    fontSize: "48px",
    lineHeight: "68px"
  },
  large: {
    fontSize: "40px",
    lineHeight: "56px"
  }
};

const mobileSizes = {
  hero: {
    fontSize: "32px",
    lineHeight: "46px"
  },
  large: {
    fontSize: "24px",
    lineHeight: "38px"
  }
};

const Heading = styled.h2`
  ${props => mobileSizes[props.size]}
  font-weight: 800;

  ${props => props.textAlign && `text-align: ${props.textAlign}`};

  @media (min-width: ${breakpoints.tabletMin}) {
    ${props => sizes[props.size]}
  }
`;

export default Heading;
