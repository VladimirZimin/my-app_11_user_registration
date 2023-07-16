import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

const StyledLink = styled(NavLink)`
  padding: 15px;
  text-decoration: none;
  color: #353340;

  &:hover {
    color: #ea5f5f;
  }

  &.active {
    color: #ea5f5f;
  }
`;

export const AuthNav = () => {
  return (
    <>
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login">Log In</StyledLink>
    </>
  );
};
