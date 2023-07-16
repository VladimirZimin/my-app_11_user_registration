import { NavLink } from "react-router-dom";
import { useAuth } from "hooks/useAuth";
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

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <StyledLink to="/">Home</StyledLink>
      {isLoggedIn && (
        <>
          <StyledLink to="/about">About</StyledLink>
          <StyledLink to="/products">Products</StyledLink>
        </>
      )}
    </>
  );
};
